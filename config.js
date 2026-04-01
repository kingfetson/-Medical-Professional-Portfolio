// Medical Professional ATS Keywords
const ATS_KEYWORDS = {
    clinical: [
        'patient care', 'clinical assessment', 'diagnosis', 'treatment planning',
        'medical history', 'physical examination', 'differential diagnosis',
        'evidence-based medicine', 'clinical guidelines', 'patient safety'
    ],
    cardiology: [
        'echocardiography', 'cardiac catheterization', 'angioplasty', 'stenting',
        'arrhythmia', 'heart failure', 'coronary artery disease', 'hypertension',
        'lipid management', 'stress testing', 'holter monitoring', 'pacemaker'
    ],
    procedures: [
        'cardiac catheterization', 'angiography', 'angioplasty', 'stent placement',
        'electrophysiology study', 'ablation', 'pacemaker implantation',
        'cardioversion', 'transesophageal echocardiography', 'nuclear cardiology'
    ],
    certifications: [
        'board certified', 'FACC', 'FSCAI', 'ABIM', 'medical license',
        'DEA certificate', 'BLS', 'ACLS', 'PALS', 'NRP'
    ],
    research: [
        'clinical research', 'publications', 'peer-reviewed', 'presentations',
        'grand rounds', 'clinical trials', 'IRB', 'case reports', 'meta-analysis'
    ],
    softSkills: [
        'patient communication', 'bedside manner', 'multidisciplinary team',
        'leadership', 'mentoring', 'quality improvement', 'patient education'
    ]
};

// Medical-Specific Parsing Rules
const PARSING_RULES = {
    patterns: {
        email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
        phone: /(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/g,
        medicalLicense: /[A-Z]{2}\d{6,}/g,
        npi: /\b\d{10}\b/g,
        degree: /(MD|DO|MBBS|PhD|MPH|MSN|NP|PA)/g,
        sections: {
            experience: /experience|positions|employment|clinical experience/i,
            education: /education|training|fellowship|residency|medical school/i,
            certifications: /certifications|licenses|credentials|board certified/i,
            publications: /publications|research|presentations|papers/i,
            skills: /skills|procedures|clinical skills|expertise/i
        }
    },
    knownSkills: [
        'echocardiography', 'cardiac catheterization', 'angioplasty', 'stenting',
        'arrhythmia management', 'heart failure', 'hypertension', 'lipid management',
        'stress testing', 'holter monitoring', 'pacemaker', 'ICD implantation',
        'electrophysiology', 'ablation', 'cardioversion', 'TEE', 'nuclear cardiology',
        'CT angiography', 'MRI cardiac', 'preventive cardiology', 'lipidology',
        'patient care', 'clinical assessment', 'diagnosis', 'treatment planning',
        'medical license', 'board certified', 'BLS', 'ACLS', 'PALS'
    ],
    medicalDegrees: ['MD', 'DO', 'MBBS', 'PhD', 'MPH', 'MSN', 'NP', 'PA'],
    maxFileSize: 15 * 1024 * 1024 // 15MB for medical CVs (often longer)
};

// Medical Resume Template
const RESUME_TEMPLATE = {
    header: `
        <div class="doc-header">
            <h1>{{fullName}}</h1>
            <h2>{{jobTitle}}</h2>
            <div class="contact-info">
                {{email}} | {{phone}} | {{location}}<br>
                {{license}} | {{npi}} | {{linkedin}}
            </div>
        </div>
    `,
    summary: `
        <section class="doc-section">
            <h3>Professional Summary</h3>
            <p>{{summary}}</p>
        </section>
    `,
    skills: `
        <section class="doc-section">
            <h3>Clinical Skills & Procedures</h3>
            <p>{{skills}}</p>
        </section>
    `,
    experience: `
        <section class="doc-section">
            <h3>Clinical Experience</h3>
            {{experienceItems}}
        </section>
    `,
    education: `
        <section class="doc-section">
            <h3>Education & Training</h3>
            {{educationItems}}
        </section>
    `,
    publications: `
        <section class="doc-section">
            <h3>Publications & Research</h3>
            <p>{{publications}}</p>
        </section>
    `
};

// Medical CV Template (Academic)
const CV_TEMPLATE = {
    header: RESUME_TEMPLATE.header,
    summary: `
        <section class="doc-section">
            <h3>Professional Profile</h3>
            <p>{{summary}}</p>
        </section>
    `,
    skills: `
        <section class="doc-section">
            <h3>Clinical Expertise</h3>
            <p>{{skills}}</p>
        </section>
    `,
    experience: `
        <section class="doc-section">
            <h3>Clinical Appointments</h3>
            {{experienceItems}}
        </section>
    `,
    education: `
        <section class="doc-section">
            <h3>Medical Education & Training</h3>
            {{educationItems}}
        </section>
    `,
    certifications: `
        <section class="doc-section">
            <h3>Licenses & Certifications</h3>
            <p>{{license}} | {{npi}} | Board Certified</p>
        </section>
    `,
    publications: `
        <section class="doc-section">
            <h3>Publications & Presentations</h3>
            <p>{{publications}}</p>
        </section>
    `,
    memberships: `
        <section class="doc-section">
            <h3>Professional Memberships</h3>
            <p>American College of Cardiology (FACC) | American Heart Association | etc.</p>
        </section>
    `
};

// Default Medical Data
const defaultData = {
    personal: {
        fullName: '',
        jobTitle: '',
        email: '',
        phone: '',
        location: '',
        linkedin: '',
        license: '',
        npi: ''
    },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    publications: '',
    jobDescription: '',
    matchedKeywords: []
};

// Medical UI Messages
const UI_MESSAGES = {
    uploadSuccess: '✅ Medical CV parsed successfully!',
    uploadError: '❌ Could not parse file. Please ensure it\'s a text-based PDF or DOCX.',
    parsing: '⏳ Parsing medical credentials...',
    generating: '⏳ Generating medical documents...',
    downloadReady: '✅ Download started!',
    matchScoreHigh: '🎉 Excellent match! Your CV is well-optimized for this position.',
    matchScoreMedium: '⚠️ Good match. Consider adding more clinical keywords.',
    matchScoreLow: '💡 Low match. Add more keywords from the job description.'
};
