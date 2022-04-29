import classnames from 'classnames';
import React, { useState } from 'react';
import Button from '../Button';
import Link from '../Link';
import getCookie from '../../util/getCookie';
import PropTypes from '../../util/PropTypes';

const HubspotForm = ({ children, pageOptions, formUrl, buttonLabel, code, className }) => {
    const [form, updateForm] = useState({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        code: '',
        message: '',
    });

    const [successStatus, setSuccessStatus] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (code && code === form.code) {
          return;
        }

        const xhr = new XMLHttpRequest();
        const url = formUrl;
        const hutk = getCookie('hubspotutk');

        const data = {
            "fields": [
                {
                    "name": "firstname",
                    "value": form.firstname,
                },
                {
                    "name": "lastname",
                    "value": form.lastname,
                },
                {
                    "name": "email",
                    "value": form.email,
                },
                {
                    "name": "company",
                    "value": form.company,
                },
            ],
            "context": {
                "hutk": hutk,
            },
        };

        if (code) {
          data.fields.push({
            "name": "code",
            "value": form.code,
          });
        }

        const finalData = JSON.stringify(data);

        xhr.open('POST', url);

        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200) {
                setSuccessStatus(true);
            } else if (xhr.readyState === 4 && xhr.status === 400){
                alert(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status === 403){
                alert(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status === 404){
                alert(xhr.responseText);
            }
        }

        xhr.send(finalData);
    };

    const handleChange = (event) => {
        updateForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className={classnames('relative bg-gray-50 text-black p-4 lg:p-8 rounded-md shadow-lg', className)}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstname" className="text-sm text-gray-600">
                        First name *
                    </label>
                    <input
                        id="firstname"
                        className="w-full p-4 mt-1"
                        name="firstname"
                        type="text"
                        placeholder="Your first name"
                        required
                        value={form.firstname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="lastname" className="text-sm text-gray-600">
                        Last name *
                    </label>
                    <input
                        id="lastname"
                        className="w-full p-4 mt-1"
                        name="lastname"
                        type="text"
                        placeholder="Your last name"
                        required
                        value={form.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="email" className="text-sm text-gray-600">
                        Work email *
                    </label>
                    <input
                        id="email"
                        className="w-full p-4 mt-1"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="company" className="text-sm text-gray-600">
                        Company *
                    </label>
                    <input
                        id="company"
                        className="w-full p-4 mt-1"
                        name="company"
                        type="text"
                        placeholder="Your company"
                        required
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>
                {code && (
                  <div className="mt-4">
                    <label htmlFor="company" className="text-sm text-gray-600">
                        Invitation code *
                    </label>
                    <input
                        id="code"
                        className="w-full p-4 mt-1"
                        name="code"
                        type="text"
                        placeholder="Invitation code"
                        required
                        value={form.code}
                        onChange={handleChange}
                    />
                  </div>
                )}
                <Button className="w-full mt-8" variant="primary" size="md" submit>
                  {buttonLabel}
                </Button>
                <div className="mt-4">
                  <small className="typo-small text-xs text-gray-500">
                    We respect your data. By submitting this form, you agree that we may use ​this information in
                    accordance with our
                    {' '}
                    <Link to="/privacy-policy/">
                      Privacy Policy
                    </Link>
                    .
                  </small>
                </div>
            </form>
            {successStatus && (
              <div className="absolute inset-0 bg-gray-50 flex items-center py-10 px-8">
                {children}
              </div>
            )}
        </div>
    );
};

HubspotForm.propTypes = {
    children: PropTypes.node,
    pageOptions: PropTypes.shape({}),
    formUrl: PropTypes.string,
    buttonLabel: PropTypes.string,
    className: PropTypes.string,
};

HubspotForm.defaultProps = {
    children: null,
    pageOptions: null,
    formUrl: null,
    buttonLabel: 'Send request',
    className: '',
};

export default HubspotForm;
