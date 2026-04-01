
# 🏥  Medical Professional Portfolio

> A professional portfolio website for medical practitioners with integrated **Smart ATS Resume & CV Builder** specifically designed for healthcare professionals.

![Medical Portfolio](https://img.shields.io/badge/Status-Production%20Ready-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![HIPAA](https://img.shields.io/badge/HIPAA-Compliant%20Form-green)

---

## 🌟 Features

### Patient-Facing Portfolio
- ✅ **Professional Hero Section** - Board certification badge, trust indicators
- ✅ **About Me** - Medical education, credentials, certifications
- ✅ **Specialties** - Clinical areas of expertise with procedure lists
- ✅ **Services** - Medical services with duration estimates
- ✅ **Patient Testimonials** - 5-star reviews with patient photos
- ✅ **Appointment Booking** - HIPAA-compliant contact form
- ✅ **Insurance Information** - Accepted insurance providers
- ✅ **Medical Disclaimer** - Required legal protections

### Medical Professional ATS Builder
- ✅ **Medical CV Upload** - Supports longer medical CVs (15MB limit)
- ✅ **Medical Credential Parsing** - Extracts licenses, NPI, board certifications
- ✅ **Specialty-Specific Keywords** - Cardiology, procedures, certifications
- ✅ **Hospital Job Matching** - ATS optimization for healthcare positions
- ✅ **Dual Output** - Clinical Resume (2-3 pages) + Academic CV (detailed)
- ✅ **Publications Section** - Research and presentation tracking
- ✅ **PDF Export** - Professional medical document formatting

---

## 🏥 Medical-Specific Features

### Credential Tracking
- Medical License Number
- NPI (National Provider Identifier)
- Board Certifications (FACC, FSCAI, etc.)
- DEA Certificate
- BLS/ACLS/PALS Certifications

### Medical Keywords
- Clinical procedures and techniques
- Specialties and subspecialties
- Medical technologies and equipment
- Patient care competencies
- Research and publications

### Document Types
1. **Clinical Resume** - For hospital positions, group practices
2. **Academic CV** - For university positions, research roles
3. **Credentials Packet** - Complete licensing and certification documentation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic, accessible structure |
| **CSS3** | Professional medical styling |
| **JavaScript (ES6+)** | Interactive functionality |
| **Font Awesome 6** | Medical icons |
| **Google Fonts** | Poppins (professional, readable) |
| **PDF.js** | Medical CV text extraction |
| **Mammoth.js** | DOCX parsing |
| **html2pdf.js** | Professional PDF generation |

---

## 📁 Project Structure


medical-portfolio/
│
├── index.html              # Main portfolio with ATS builder
├── style.css               # Medical professional styling
├── script.js               # Medical-specific functionality
├── config.js               # Medical keywords & templates
├── README.md               # This documentation
│
└── assets/
    └── images/             # Professional headshots, clinic photos


## 🎯 Key Medical-Specific Features:

| Feature | Benefit for Doctors |
|---------|-------------------|
| **Board Certification Badge** | Builds immediate trust |
| **Medical License & NPI Fields** | Required for hospital credentialing |
| **Procedure Lists** | Shows clinical capabilities |
| **Publications Section** | Important for academic positions |
| **Insurance Accepted** | Patients need this information |
| **HIPAA-Compliant Form** | Legal protection for practice |
| **Medical Keywords** | Optimized for healthcare ATS systems |
| **Academic CV Format** | Required for university positions |
| **15MB File Limit** | Accommodates longer medical CVs |
| **Specialty-Specific Templates** | Cardiology, Surgery, Internal Med, etc. |


---

## 🚀 Quick Start

### For Medical Professionals
1. **Download** the project files
2. **Open** `index.html` in browser
3. **Customize** with your information:
   - Replace name, specialty, credentials
   - Update clinic location and contact info
   - Add your specialties and services
   - Upload professional headshot
4. **Use ATS Builder** for job applications:
   - Upload existing medical CV
   - Paste hospital job description
   - Download optimized resume/CV
5. **Deploy** to hosting (Netlify, Vercel, GitHub Pages)

### For Developers

# Clone repository
git clone https://github.com/yourusername/medical-portfolio.git
cd medical-portfolio

# Run locally
python3 -m http.server 8000
# Visit: http://localhost:8000
```

---

## 🎨 Customization Guide

### Update Personal Information
```html
<!-- Hero Section -->
<h1>Dr. Your <span class="highlight">Name</span>, MD, FACC</h1>
<p>Board-certified [Specialty] with [X] years of experience...</p>

<!-- Contact Info -->
<p>Heart Care Center, Suite 500</p>
<p>123 Medical Plaza, City, State ZIP</p>
<p>(555) 123-4567</p>
```

### Change Medical Specialty
In `config.js`:
```javascript
const ATS_KEYWORDS = {
    yourSpecialty: [
        'procedure1', 'procedure2', 'condition1', 'condition2'
    ]
    // Add your specialty keywords
};
```

### Update Services

<div class="service-card">
    <div class="service-number">01</div>
    <h3>Your Service Name</h3>
    <p>Service description...</p>
    <span class="service-duration">
        <i class="fas fa-clock"></i> Duration
    </span>
</div>
```

### Medical Colors

:root {
    --primary: #0ea5e9;      /* Medical blue */
    --primary-dark: #0284c7;
    --primary-light: #e0f2fe;
    --accent: #10b981;       /* Health green */
    --secondary: #0f172a;    /* Professional dark */
}

---

## ⚕️ HIPAA Compliance Notes

### Contact Form
- ✅ Consent checkbox for HIPAA-compliant communication
- ✅ No PHI (Protected Health Information) stored
- ✅ Form submissions should go to secure email
- ✅ Disclaimer about emergency situations

### Important Disclaimers

<p class="disclaimer">
    This website is for informational purposes only and does not 
    constitute medical advice. In case of emergency, call 911.
</p>
```

---

## 📊 ATS Optimization for Medical Positions

### Hospital Application Tips
1. **Include NPI Number** - Required for most positions
2. **List Board Certifications** - FACC, FSCAI, etc.
3. **Specify Procedures** - Volume and types performed
4. **Include Research** - Publications, presentations
5. **Mention EMR Systems** - Epic, Cerner, Meditech
6. **Add Call Schedule** - Availability for call coverage

### Keywords by Setting
| Setting | Keywords |
|---------|----------|
| **Academic** | Research, publications, teaching, residents, fellows |
| **Community Hospital** | Patient volume, call schedule, multidisciplinary |
| **Private Practice** | Patient satisfaction, efficiency, business development |
| **VA/Government** | Veterans, underserved populations, quality metrics |

---

## 🔒 Privacy & Security

### Patient Data Protection
- ✅ No patient information stored on website
- ✅ Contact form doesn't save PHI
- ✅ All ATS processing is client-side
- ✅ No third-party tracking for patient pages

### Professional Data
- ✅ Medical credentials stored locally only
- ✅ No CV data sent to servers
- ✅ PDF generation happens in browser
- ✅ Users control all their information

---

## 🐛 Troubleshooting

### Common Issues

**"Medical CV won't upload"**
- Medical CVs can be long (10+ pages)
- Ensure file is under 15MB
- Try converting to text-based PDF

**"Credentials not parsing"**
- License numbers vary by state
- NPI is always 10 digits
- May need manual entry for some fields

**"PDF formatting issues"**
- Medical CVs are longer than standard resumes
- Consider 2-page resume + separate CV
- Use Print → Save as PDF for complex layouts

---

## 📞 Support for Medical Professionals

| Need | Solution |
|------|----------|
| **Technical Issues** | GitHub Issues or email support |
| **Content Questions** | Consult medical marketing professional |
| **HIPAA Compliance** | Review with legal counsel |
| **SEO for Medical** | Use local SEO, Healthgrades, Vitals |

---


---

## 🙏 Acknowledgments

- **Font Awesome** - Medical icons
- **Unsplash** - Professional medical stock photos
- **PDF.js** - Mozilla's PDF renderer
- **Medical colleagues** - For feedback on usability

---

## 🚀 Ready to Build Your Medical Portfolio?

1. **Download** this template
2. **Customize** with your credentials
3. **Add** your specialties and services
4. **Use** the ATS Builder for job applications
5. **Deploy** and start attracting patients!

---

## 📄 License

MIT License - Free for personal and commercial use.

*Built with ❤️ for healthcare professionals | Helping doctors succeed since 2026*

**⚠️ Medical Disclaimer**: This website template is for informational purposes only and does not constitute medical advice, diagnosis, or treatment.


---

