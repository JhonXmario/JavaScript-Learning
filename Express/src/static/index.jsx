//! Esto fue hecho por IA =( solo aclaro, aun no se nada de react, pero me gusta aprender y este ejemplo almenos me dara una idea de como se programa en react.

import React, { useState } from 'react';

function ResumeForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Resume:', formData);
        alert('Resume submitted successfully!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            education: '',
            experience: '',
            skills: '',
        });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Resume Submission Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Education:</label>
                    <textarea
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Experience:</label>
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Skills:</label>
                    <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ResumeForm;