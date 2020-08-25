//alert("JS loaded");  

function getInformation(){
    //alert("getInfo called");
    var course_informations = [
        {
            "Name": "DIPLOMA IN TOOL & DIE MAKING (DTDM)", 
            "Fee": "₹ 19,000 (per semester)", 
            "Duration": "4 years",
            "Selection": "Selection will be based on all India level Entrance Examination",
            "Duration Type": "L", 
            "Qualification": "X",
            "Short": "DTDM", 
            "Image": "images/test.jpg",
            "Description": `After completion of the course, the Trainees will
            be able to design & manufacture different types of
            tools & dies using CAD/CAM software & all kind of
            conventional & CNC machine.<br><br>
            <b>Course Content</b> - Equivalent to Diploma in Mechanical Engg. With
            TOOL/Mould/Die/FixtureDesigning&Manufacturing.
            N.B. : Course contains 70% Practical & 30%
            Theory.`,
            "Apply": "#"
        },

        {
            "Name": "DIPLOMA IN MECHATRONICS (DIM)", 
            "Fee": "₹ 19,000 (per semester)", 
            "Duration": "3 years",
            "Selection": "Selection will be based on all India level Entrance Examination",
            "Duration Type": "L", 
            "Qualification": "X",
            "Short": "DIM", 
            "Image": "images/test.jpg",
            "Description": `After completion of the course, the Trainees will
            be able to work in different types of mechanical as
            well as electronics machineries and can be able to
            manufacture different mechatronics components.<br><br>
            <b>Course Content</b> - Combined subjects of Mechanical, Electrical &
            Electronics
            N.B. : Course contains 70% Practical & 30%
            Theory.`,
            "Apply": "#"
        },

        {
            "Name": "ITI MACHINIST", 
            "Fee": "₹ 28,000 (per year)", 
            "Duration": "2 years",
            "Selection": "Selection will be based on HSC mark",
            "Duration Type": "L", 
            "Qualification": "X",
            "Short": "ITIM", 
            "Image": "images/test.jpg",
            "Description": `<b>Course Content</b> - As per NCVT Syllabus<br><br>
            <b>Course location </b>- CTTC, Bhubaneswar`,
            "Apply": "#"
        },

        {
            "Name": "ITI FITTER", 
            "Fee": "₹ 28,000 (per year)", 
            "Duration": "2 years",
            "Selection": "Selection will be based on HSC mark",
            "Duration Type": "L", 
            "Qualification": "X",
            "Short": "ITIF", 
            "Image": "images/test.jpg",
            "Description": `<b>Course Content</b> - As per NCVT Syllabus<br><br>
            <b>Course location </b>- CTTC, Kalinga nagar, Jajpur`,
            "Apply": "#"
        },

        {
            "Name": "ITI ELECTRICIAN", 
            "Fee": "₹ 28,000 (per year)", 
            "Duration": "2 years",
            "Selection": "Selection will be based on HSC mark",
            "Duration Type": "L", 
            "Qualification": "X", 
            "Short": "ITIE",
            "Image": "images/test.jpg",
            "Description": `<b>Course Content</b> - As per NCVT Syllabus<br><br>
            <b>Course location</b> - CTTC, Kalinga nagar, Jajpur`,
            "Apply": "#"
        },

        {
            "Name": "CONDENSED CERTIFICATE COURSE IN TOOL & DIE MAKING (CTDM)", 
            "Fee": "₹ 66,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "X", 
            "Short": "CTDM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Skilled Technician/Tool and Die Maker<br><br>
            After completion of the course, the trainees will be able
            to handle all types of machine as well as can
            manufacture different types of tool & die.<br><br>
            <b>Semester-I</b> - Production technology, Auto CAD, Part
            Programming, Master Cam, Press Tool Design, CNC
            Technology, Engineering Drawing, Material
            Technology, Metrology, Press Tool Theory.<br><br>
            <b>Semester-II</b> - Press Tool Design, Mold Manufacturing,
            Modern Manufacturing Technology, Jigs and Fixture,
            Mold Theory, Communicative English, Industrial
            Management, In plant Training & Project Work.
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=141"
        },

        {
            "Name": "CERTIFICATE COURSE IN CNC TURNING & MILLING (CCTM)", 
            "Fee": "₹ 66,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "X", 
            "Short": "CCTM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Skilled Technician/Tool and Die Maker<br><br>
            After completion of the course, the trainees will be able
            to handle all types of machine as well as can
            manufacture different types of tool & die.<br><br>
            <b>Semester-I</b> - Production technology, Auto CAD, Part
            Programming, Master Cam, Press Tool Design, CNC
            Technology, Engineering Drawing, Material
            Technology, Metrology, Press Tool Theory.<br><br>
            <b>Semester-II</b> - Press Tool Design, Mold Manufacturing,
            Modern Manufacturing Technology, Jigs and Fixture,
            Mold Theory, Communicative English, Industrial
            Management, In plant Training & Project Work.
            `,
            "Apply": "#"
        },

        {
            "Name": "CERTIFICATE COURSE IN MACHINE OPERATION (CCMO)", 
            "Fee": "₹ 18,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "UM", 
            "Short": "CCMO",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 3<br><br>
            <b>Job Role</b> - Technician / Machine Tool Operator<br><br>
            After completion of the course, the Trainees will
            be able to do machining operation in all
            conventional machines as well as can
            manufacture components.<br><br>
            <b>Course content</b> - Conventional Machine Practice, Machine Shop -
            Theory, Engineering Metrology, Engineering
            Drawing, Workshop Calculation and Science,
            Employability Skills
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=87"
        },

        {
            "Name": "CERTIFICATE COURSE IN ADVANCED MACHINING (CCAM) - For ITI Fitter", 
            "Fee": "₹ 32,000", 
            "Duration": "1 year",
            "Selection": "Selection will be based on merit list prepared to 40% mark of HSC + 60% of ITI mark",
            "Duration Type": "L", 
            "Qualification": "PITI", 
            "Short": "CCAM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Skilled Conventional and CNC Machine Operator<br><br>
            After completion of the course, the Trainees will be able to
            impart newskill in AdvanceMachining&able to dowork in
            Fitting&AssemblyArea.<br><br>
            <b>Semester-1 </b>: Production Technology, AutoCAD,
            Engineering drawing, Metrology, Communication Skill<br>
            <b>Semester-2 </b>: Advance Conventional Machining, CNC
            Lathe, CNC Milling, Non-Conventional Machining,
            Engineering Drawing, Material Technology,
            Entrepreneurship, In-plant Training
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=98"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN MACHINE MAINTENANCE (ACCMM) – For ITI Fitter/Electrician", 
            "Fee": "₹ 32,000", 
            "Duration": "1 year",
            "Selection": "Selection will be based on merit list prepared to 40% mark of HSC + 60% of ITI mark",
            "Duration Type": "L", 
            "Qualification": "PITI", 
            "Short": "ACCMM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Maintenance Technician<br><br>
            After completion of the course, the Trainees will be able to
            do maintenance of conventional machines & CNC Turning
            &Milling.Traineeswillalsobetrainedoncomputers.<br><br>
            <b>Semester-1 </b>: Conventional milling, Conventional
            turning, Fitting & bench work, Use of safety practice in
            industry, Work efficiently at workplace, Computer
            fundamentals & AutoCAD, Basic Electricals &
            Transmission control, Preventive & Breakdown
            Maintenance of Conventional Machine tools like Lathe,
            Milling, Grinding, Drilling, etc.
            <b>Semester-2 </b>: Programmable Logic Controller( PLC),
            Air Compressor, Pumps, DG Set, Uninterrupted Power
            Supply, CNC Machines
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=84"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN CNC MACHINING (ACCCM) – For ITI Machinist & Fitter", 
            "Fee": "₹ 34,000", 
            "Duration": "1 year",
            "Selection": "Selection will be based on merit list prepared to 40% mark of HSC + 60% of ITI mark",
            "Duration Type": "L", 
            "Qualification": "PITI", 
            "Short": "ACCCM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - CNC Operator<br><br>
            After completion of the course, the trainees will be able
            to handle all tool room machine (Conventional & CNC
            Machines) manufacture any type of job according to the
            demand, independently in CNC machining area.<br><br>
            <b>Course content</b> - CNC Programming & CNC Machining, Engineering
            Metrology and Quality Assurance-THEORY &
            PRACTICAL, Production Planning & Controls,
            Computer Aided Manufacturing (Master Cam),
            Advance Cam (DEL CAM – 3 Axis And 5 Axis), Total
            quality management, Fundamentals of Metal Cutting
            Tool, Entrepreneurship, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=135"
        },

        {
            "Name": "Advanced Certificate Course in Welding Technology (ACCWT)", 
            "Fee": "₹ 50,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "PITI", 
            "Short": "ACCWT",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Welding Technician<br><br>
            After completion of the course, the Trainees will be able
            to do all kind of fabrication work using various welding
            methods as well as can inspect the welding, identify the
            defects & can make the remedies.<br><br>
            <b>Course content</b> - Personality Development & Computer Literacy, Engg.
            Calculation & Science, Engg. Drawing, Welding
            Technology (Theory), Welding Techniques using
            Various Weld Methods
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=96"
        },

        {
            "Name": "Certificate Course in Machining (CCM)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 Months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "PITI", 
            "Short": "CCM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Skilled Technician/ Machinist<br><br>
            After completion of the course, the Trainees will be able
            to operate Conventional Tool Room Machines<br><br>
            <b>Course content</b> - Production Technology, Engg. Drawing, Engg.
            Metrology, Fundamentals of Computer, AutoCAD, Soft
            Skill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=136"
        },

        {
            "Name": "Certificate Course in Fitting & Rigging (CCFR)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 Months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "PITI", 
            "Short": "CCFR",
            "Image": "images/test.jpg",
            "Description": `<b>Job Role</b> - Maintenance Technician & Rigger<br><br>
            Maintenance of Industrial equipment (Hydraulic, Pneumatic, Mechanical & Electrical), Lifting equipment<br><br>
            <b>Course content</b> - Fitting, Machining, Hydraulic, Pneumatic, Maintenance of gear, Belt, Pump
            `,
            "Apply": "#"
        },

        {
            "Name": "POST DIPLOMA IN TOOL & DIE MAKING (PDTDM)", 
            "Fee": "₹ 54,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "PD", 
            "Short": "PDTDM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Tool Room Engineer<br><br>
            After completion of the course, the trainees will be
            able to manufacture of different tools & dies using
            Tool room machines, CNC technology and CAM
            software.<br><br>
            <b>Course content</b> - CNC Programming & CNC Machine Practice,
            Computer Aided Design (AUTO CAD AND SOLID
            WORKS), Fundamentals Of Tools & Dies,
            Engineering Metrology And Quality Assurance,
            Production Planning & Controls, Computer Aided
            Manufacturing (MASTER CAM & NX CAM),
            Advance CAM (DEL CAM – 3 AXIS AND 5 AXIS),
            Engineering Materials And Heat Treatment, Total
            Quality Management, Metal Cutting & Cutting
            Tool Design, Entrepreneurship, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=92"
        },

        {
            "Name": "POST DIPLOMA IN CAD/ CAM (PDCC)", 
            "Fee": "₹ 54,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "PD", 
            "Short": "PDCC",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - CAD CAM Technologist<br><br>
            After completion of the course, the Trainees will
            be able to do design& analysis of different
            engineering application through latest CAD/CAE
            software & simultaneously to operate CNC
            machine by preparing programme through latest
            CAM software.<br><br>
            <b>Course content</b> - Engineering Drawing, Computer Fundamentals
            and Auto Cad, Master CAM, CNC Part
            Programming & Machine Practice, Solid works,
            Unigraphics ( NX), Creo Parametric, CATIA, Work
            NC, Finite Element Analysis (FEA), Reverse
            Engineering, Safety & Maintenance, Basic
            Engineering Concepts, Entrepreneurship and
            Managerial Skills, Project
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=90"
        },

        {
            "Name": "MASTER CERTIFICATE COURSE IN TOOL DESIGN (MCCTD)", 
            "Fee": "₹ 36,500", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "PD", 
            "Short": "MCCTD",
            "Image": "images/test.jpg",
            "Description": `<b>Job Role</b> - Tool & Die Maker<br><br>
            After completion of the course, the trainees will be able to design & analyse different type of Tools & other
            engineering application (through latest CAD/CAE software) simultaneously they can manufacture
            different type of tool & precision components using modern manufacturing techniques through latest
            CAM Software.<br><br>
            <b>Course content</b> - 
            1. Software: Auto CAD, Solid works & Unigraphics<br>
            2. Theory:<br>
            &emsp; -> Review of engineering subjects.<br>
            &emsp; -> Press tool & mould design(practical oriented)<br>
            &emsp; -> ISO, 5s, Kaizen<br>
            3. Soft skill: Communication skill, personality development, GD, interview techniques, resume
            preparation & mock interview.<br>
            4. Workshop exercise: Hand injection mould, Jig & Fixture, Simple Press Tool, Semi- Automatic Injection
            Mould, Progressive Press Tool<br>
            `,
            "Apply": "#"
        },

        {
            "Name": "ADVANCED DIPLOMA IN CNC PROGRAMMING TECHNIQUES & PRACTICE (ADCNC)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "PD", 
            "Short": "ADCNC",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - CNC Programmer<br><br>
            After completion of the course, the trainees will be
            a successful CNC programmer & CNC supervisor
            simultaneously they can also design different
            components using CAD software.<br><br>
            <b>Course content</b> - Production Technology (Introduction to
            Workshop Technology), AutoCAD (Drafting and
            modeling using Auto CAD), CNC Programing &
            CNC Machine Practice, Master CAM (Modelling
            and programming using Master-CAM),
            Unigraphics (Modelling and programming using
            Unigraphics), Engineering Drawing (Study of
            engineering drawing), METROLOGY (Application
            of metrology in manufacturing), MATERIAL
            TECHNOLOGY (Use of materials with respect to
            their application and properties), Communication
            Skill (Communication at Workplace), Project work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=107"
        },

        {
            "Name": "POST GRADUATE DIPLOMA IN TOOL DESIGN & CAD/CAM (PGDTD)", 
            "Fee": "₹ 60,000", 
            "Duration": "1 year (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "PGT", 
            "Short": "PGDTD",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 8<br><br>
            <b>Job Role</b> - Tool Designer or CAD CAM Engineer<br><br>
            After completion of the course, the trainees will be able
            to work in design department to carry out designing of
            different tools & dies using CAD CAM software.<br><br>
            <b>Course content</b> - CNC Programming & CNC Machine Practice, Computer
            Aided Design (Auto CAD and Solidworks), Computer
            Aided manufacturing (Master CAM & NX CAM), Design
            of Jigs & Fixtures, Design of Press Tool, Design of Die
            Casting Die, Advance Metrology, Advanced CAD-I (NX
            & CATIA), Manufacturing Process - Process Planning
            and Heat Treatment, Advanced CAD- II (Creo),
            Computer Aided Engineering (ANSYS), Rapid
            Prototyping and ReverseEngineering,
            Entrepreneurship, Engineering Research Methodology,
            Project work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=94"
        },

        {
            "Name": "POST GRADUATE IN AEROSPACE MANUFACTURING (PGAM)", 
            "Fee": "₹ 60,000", 
            "Duration": "1 year 1 Year (3 Months in Training Dept. & 9 Months in Production Dept.)",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "PGT", 
            "Short": "PGAM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 8<br><br>
            <b>Job Role</b> - Entrepreneur / Engineer (Production/Process
            Planing & Quality Control)<br><br>
            Participants will be able to work in
            Conventional, CNC machines, Assembly & fitting
            area, Work in sheet metal industries / plastic industries.
            Type of tools, maintenance and trouble shooting
            of problems.<br><br>
            <b>Semester-1 </b> - Production Technology, AutoCAD,
            CNC Technology, Master cam, Engineering
            Drawing, Metrology, Material Technology, Heat
            Treatment, Surface Coating & Cleaning, Soft Skill
            <b>Semester-2 </b> - Hyper Mill, CATIA, QMS and FAI, AS
            9100, Quality Control & Inspection, HYPER MILL,
            Selection of Cutting Tools, Strength of Material,
            Process Plan, Theory of Sheet Metal
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=91"
        },

    ];

    return course_informations;
}