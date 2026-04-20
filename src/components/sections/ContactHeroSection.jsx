import { useState } from 'react';
import { contactCards } from '../../data/siteData';
import ThemeSection from '../common/ThemeSection';
import Reveal from '../common/Reveal';
import Icon from '../common/Icon';

const serviceOptions = [
  'AI Solutions & Automation',
  'Product Engineering',
  'Cloud & Platform Services',
  'Data & Analytics',
  'Quality & Performance',
  'Technology Consulting',
];

const defaultForm = {
  name: '',
  company: '',
  email: '',
  service: serviceOptions[0],
  details: '',
};

const fallbackContactEmail = 'hr@deepvtechsolutions.com';
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldNames = ['name', 'company', 'email', 'service', 'details'];

function validateField(name, value) {
  const trimmedValue = value.trim();

  switch (name) {
    case 'name':
      if (!trimmedValue) {
        return 'Please enter your name.';
      }
      if (trimmedValue.length < 2) {
        return 'Name should be at least 2 characters.';
      }
      return '';
    case 'email':
      if (!trimmedValue) {
        return 'Please enter your email address.';
      }
      if (!emailPattern.test(trimmedValue)) {
        return 'Please enter a valid email address.';
      }
      return '';
    case 'company':
      if (!trimmedValue) {
        return 'Please enter your company name.';
      }
      if (trimmedValue.length < 2) {
        return 'Company name should be at least 2 characters.';
      }
      return '';
    case 'service':
      if (!trimmedValue) {
        return 'Please choose a service.';
      }
      return '';
    case 'details':
      if (!trimmedValue) {
        return 'Please share a few details about your project.';
      }
      if (trimmedValue.length < 20) {
        return 'Project details should be at least 20 characters.';
      }
      return '';
    default:
      return '';
  }
}

function validateForm(values) {
  return fieldNames.reduce((errors, fieldName) => {
    const error = validateField(fieldName, values[fieldName] ?? '');

    if (error) {
      errors[fieldName] = error;
    }

    return errors;
  }, {});
}

export default function ContactHeroSection() {
  const contactEmail = fallbackContactEmail;
  const submitEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;
  const [formState, setFormState] = useState(defaultForm);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));

    if (touchedFields[name]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        const nextError = validateField(name, value);

        if (nextError) {
          nextErrors[name] = nextError;
        } else {
          delete nextErrors[name];
        }

        return nextErrors;
      });
    }

    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouchedFields((current) => ({ ...current, [name]: true }));
    setErrors((current) => {
      const nextErrors = { ...current };
      const nextError = validateField(name, value);

      if (nextError) {
        nextErrors[name] = nextError;
      } else {
        delete nextErrors[name];
      }

      return nextErrors;
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formState);
    setTouchedFields({
      name: true,
      company: true,
      email: true,
      service: true,
      details: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = fieldNames.find((fieldName) => nextErrors[fieldName]);
      const firstInvalidElement = firstInvalidField ? event.currentTarget.elements.namedItem(firstInvalidField) : null;

      if (firstInvalidElement && typeof firstInvalidElement.focus === 'function') {
        firstInvalidElement.focus();
      }

      setStatus('idle');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(submitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `DeepVTech inquiry: ${formState.service}`,
          _captcha: 'false',
          _replyto: formState.email,
          name: formState.name,
          company: formState.company,
          email: formState.email,
          service: formState.service,
          details: formState.details,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send');
      }

      setStatus('success');
      setFormState(defaultForm);
      setErrors({});
      setTouchedFields({});
    } catch (_error) {
      setStatus('error');
    }
  };

  return (
    <div className="pb-20">
      <ThemeSection className="pt-2">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="theme-chip inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
                <Icon name="sparkles" className="h-3.5 w-3.5" />
                Start the Conversation
              </div>
              <h2 className="theme-title mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let's talk about your next product, platform, or AI initiative.
              </h2>
              <p className="theme-copy mx-auto mt-4 max-w-2xl text-base leading-8">
                Use this form to start a focused conversation about consulting, software delivery, AI implementation, workflow modernization, or engineering improvement.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <form noValidate onSubmit={handleSubmit} className="theme-form-shell mx-auto mt-8 max-w-4xl rounded-[36px] p-6 sm:p-8">
              <div className="grid gap-5">
                <div className="text-center">
                  <h3 className="theme-title text-2xl font-semibold tracking-tight">Send an inquiry</h3>
                  <p className="theme-copy mt-2 text-sm leading-7">Share a few details and we'll shape the right solution path for your business.</p>
                </div>
                {Object.keys(errors).length > 0 ? (
                  <div className="theme-alert theme-alert--error rounded-2xl px-4 py-3 text-sm leading-6">
                    Please fix the highlighted fields before requesting a consultation.
                  </div>
                ) : null}
                {status === 'success' ? (
                  <div className="theme-alert theme-alert--success rounded-2xl px-4 py-3 text-sm leading-6">
                    Inquiry sent successfully to {contactEmail}.
                  </div>
                ) : null}
                {status === 'error' ? (
                  <div className="theme-alert theme-alert--error rounded-2xl px-4 py-3 text-sm leading-6">
                    We could not send your inquiry right now. Please try again.
                  </div>
                ) : null}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="theme-field-label grid gap-2 text-left text-sm font-medium">
                    Name
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={`rounded-2xl px-4 py-3 transition ${
                        errors.name
                          ? 'theme-form-field theme-form-field--error'
                          : 'theme-form-field'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <span id="contact-name-error" className="text-xs font-medium leading-5 text-rose-700">
                        {errors.name}
                      </span>
                    ) : null}
                  </label>
                  <label className="theme-field-label grid gap-2 text-left text-sm font-medium">
                    Company
                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={errors.company ? 'contact-company-error' : undefined}
                      className={`rounded-2xl px-4 py-3 transition ${
                        errors.company
                          ? 'theme-form-field theme-form-field--error'
                          : 'theme-form-field'
                      }`}
                      placeholder="Company name"
                    />
                    {errors.company ? (
                      <span id="contact-company-error" className="text-xs font-medium leading-5 text-rose-700">
                        {errors.company}
                      </span>
                    ) : null}
                  </label>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="theme-field-label grid gap-2 text-left text-sm font-medium">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={`rounded-2xl px-4 py-3 transition ${
                        errors.email
                          ? 'theme-form-field theme-form-field--error'
                          : 'theme-form-field'
                      }`}
                      placeholder="name@company.com"
                    />
                    {errors.email ? (
                      <span id="contact-email-error" className="text-xs font-medium leading-5 text-rose-700">
                        {errors.email}
                      </span>
                    ) : null}
                  </label>
                  <label className="theme-field-label grid gap-2 text-left text-sm font-medium">
                    Service needed
                    <select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'contact-service-error' : undefined}
                      className={`rounded-2xl px-4 py-3 transition ${
                        errors.service
                          ? 'theme-form-field theme-form-field--error'
                          : 'theme-form-field'
                      }`}
                    >
                      {serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    {errors.service ? (
                      <span id="contact-service-error" className="text-xs font-medium leading-5 text-rose-700">
                        {errors.service}
                      </span>
                    ) : null}
                  </label>
                </div>
                <label className="theme-field-label grid gap-2 text-left text-sm font-medium">
                  Project details
                  <textarea
                    name="details"
                    value={formState.details}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    aria-invalid={Boolean(errors.details)}
                    aria-describedby={errors.details ? 'contact-details-error' : undefined}
                    className={`rounded-3xl px-4 py-3 transition ${
                      errors.details
                        ? 'theme-form-field theme-form-field--error'
                        : 'theme-form-field'
                    }`}
                    placeholder="Tell us about your project, challenge, or AI idea..."
                  />
                  {errors.details ? (
                    <span id="contact-details-error" className="text-xs font-medium leading-5 text-rose-700">
                      {errors.details}
                    </span>
                    ) : null}
                </label>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="theme-primary-button relative mx-auto inline-flex min-w-[17rem] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="text-center">{status === 'sending' ? 'Sending...' : 'Request a Consultation'}</span>
                  <span className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 ring-1 ring-inset ring-white/20">
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </span>
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </ThemeSection>

      <ThemeSection subtle>
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {contactCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <a
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="theme-card theme-card--interactive group relative flex h-full min-h-[18rem] flex-col overflow-hidden rounded-[30px] p-6 text-left transition duration-300 hover:-translate-y-1"
                >
                  <div className="theme-gradient-bar absolute inset-x-0 top-0 h-1" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="theme-icon-badge flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </div>

                    <div className="theme-chip inline-flex rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]">
                      {item.action}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <h3 className="theme-title text-xl font-semibold tracking-tight">{item.title}</h3>

                    <div className="mt-4 space-y-2">
                      {item.lines.map((line, lineIndex) => (
                        <div
                          key={line}
                          className={
                            lineIndex === 0
                              ? 'theme-title text-base font-medium leading-7'
                              : 'theme-copy text-sm leading-6'
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="theme-action-link relative inline-flex w-full items-center justify-center rounded-2xl px-4 py-2.5 text-sm font-semibold">
                        <span className="text-center">{item.action}</span>
                        <span className="theme-action-link__icon absolute right-2.5 flex h-7 w-7 items-center justify-center rounded-full">
                          <Icon name="arrow-right" className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </ThemeSection>
    </div>
  );
}
