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
            "Apply": ""
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
            "Apply": ""
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
            "Apply": ""
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
            "Apply": ""
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
            "Apply": ""
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
            "Qualification": "ITI", 
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
            "Qualification": "ITI", 
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
            "Qualification": "ITI", 
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
            "Qualification": "ITI", 
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
            "Qualification": "ITI", 
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
            "Qualification": "ITI", 
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
            "Qualification": "D", 
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
            "Qualification": "D", 
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
            "Qualification": "D", 
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
            "Qualification": "D", 
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
            "Qualification": "GT", 
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
            "Duration": "1 Year (3 Months in Training Dept. & 9 Months in Production Dept.)",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "GT", 
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

        {
            "Name": "MASTER CERTIFICATE COURSE IN CAD/CAM (MCC)", 
            "Fee": "₹ 36,000", 
            "Duration": "6 month (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "MCC",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - CAD CAM Engineer<br><br>
            After completion of the course, the trainees will be able
            to work in design department and to carry out designing
            using various CAD software, can develop CAM
            programme using CAM software & analysis of different
            component using CAE software<br><br>
            <b>Course content</b> - Computer Aided Design (CAD-Auto CAD and Solid
            works), Computer Aided Design & Computer Aided
            manufacturing (Unigraphics CAD & Unigraphics CAM),
            Computer Aided Engineering (ANSYS), Advance
            Computer Aided Design(CREO Parametric and CATIA),
            CNC Programming And CNC Machining, Related Theory Subjects (Engineering Drawing, Engineering Metrology,
            Strength of Material, Engineering Material, Production Technology), Entrepreneurship, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=106"
        },

        {
            "Name": "ADVANCED DIPLOMA IN MACHINE MAINTENANCE & AUTOMATION (ADMMA)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 month (6hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "ADMMA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Entrepreneur/Maintenance&Automation Engineer<br><br>
            After completion of the course, the trainees should
            be able to perform maintenance activities of
            workshop machinaries.<br><br>
            <b>Course content</b> - Machine Operation, Electrical Hardware Logic Control,
            Electrical Machines, Pneumatics & Hydraulics,
            Machine Maintenance, Programmable Logic
            Controller,SCADA&HMI,TIA-Portal,Communication
            Skill,AutoCADElectrical,BasicElectronics
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=8"
        },

        {
            "Name": "ADVANCED EMBEDDED TECHNOLOGY (AET)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 month (6hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "AET",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Junior Embedded Engineer / PCB Designer<br><br>
            After completion of the course, the trainees should
            be able to work on embedded hardware and
            software also design printed circuit board.<br><br>
            <b>Course content</b> - PIC Microcontroller, Embedded C/C++,
            Communication protocol & Implementation,
            Robotics- Interfacing with Motors and Sensors,
            ARM-Advanced RISC Machine(LPC2148),
            Concept of RTOS, VLSI Design with FPGA/CPLD,
            PCB Designing, Python Programming on Raspberry Pi, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=111"
        },

        {
            "Name": "CERTIFICATE COURSE IN ELECTRICAL EQUIPMENTS, REPAIRING & MAINTENANCE (CCERM)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 month (6hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "CCERM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Technical Assistant and Maintenance Engineer<br><br>
            After completion of the course, the Trainees will
            be able to work with electrical wiring high voltage
            moter and work on estimation & costing.<br><br>
            <b>Course content</b> - Basic safety regarding use of electricity,
            Fundamentals on hand tools, Basic electrical and
            electronics, Domestic and industrial wiring,
            Repairing of home appliances, Repairing of
            washing machine, Repairing of air conditioner
            and refrigerator, Repairing of water purifier and
            geyser, Repairing, winding and maintenance of
            motor and pump, Soft Skill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=100"
        },

        {
            "Name": "POST DIPLOMA IN INDUSTRIAL AUTOMATION & ROBOTICS (PDIAR)", 
            "Fee": "₹ 60,000", 
            "Duration": "1 year (6hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "D", 
            "Short": "PDIAR",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Automation Supervisor & Robotic Engineer<br><br>
            After completion of the course, the trainees
            should be able to fit to work in Electrical
            Engineering & Electronics Engineering
            automation field as well as can be able to work in
            industrial robots.<br><br>
            <b>Course content</b> - To have broad knowledge of Automation
            Techniques, Robotics and Automation systems,
            Drives, Hydraulics & Pneumatics. To apply
            Automation and Robotics principles for solutions
            to the specific problems. To use software for
            generating solutions in PLC, Hydraulics &
            Pneumatics. To work as individual & member of
            inter discipline team in the management
            supervision. To communicate effectively. To use
            mathematical skills for solving specific problems.
            To work on project & have good data collecting,
            organizing ability. To observe & follow safety.
            Develop entrepreneurship skills. Generate and
            update customizable reports and data in
            presentable form, interpret drawings, draw
            interferences and workout other technical details.
            Explain energy flow in electrical, pneumatic and
            hydraulic sub-systems.
            `,
            "Apply": "#"
        },

        {
            "Name": "MASTER CERTIFICATE COURSE IN AUTOMATION & PROCESS CONTROL (MCCAPC)", 
            "Fee": "₹ 36,000", 
            "Duration": "6 months (6hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "MCCAPC",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 7<br><br>
            <b>Job Role</b> - Entrepreneur / Process Control / Automation
            Engineer<br><br>
            After completion of the course, the trainees
            should be able to work in power plant, packaging
            industries, FMCG area as well as can work in
            process automation area.<br><br>
            <b>Course content</b> - Electrical Hardware Logic Control, Electrical
            Machines, Sensor and transducer, Pneumatics &
            Hydraulics system, Programmable Logic
            Controller, Embedded System, Machine
            Maintenance, SCADA & HMI, TIA- Portal,
            Distributed control system by PCS-7, Lab view,
            Robotics, AUTOCAD Electrical, Communication
            Skill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=99"
        },

        {
            "Name": "MASTER CERTIFICATE COURSE IN MECHATRONICS (MCCM)", 
            "Fee": "₹ ", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "MCCM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 7<br><br>
            <b>Job Role</b> - <br><br>
            After completion of the course, the Trainees will
            be able to work in are if mechatronics, robotics
            and automation.<br><br>
            <b>Course content</b> - 
            <ul>
                <li>PLC</li>
                <li>Hydraulics & Pneumatics</li>
                <li>Mechatronics Principles</li>
                <li>Automation Techniques</li>
                <li>Mechatronics Systems</li>
                <li>Drives & Sensors</li>
                <li>Data actuation system (lab view)</li>
                <li>VLSI</li>
                <li>Basic Electronics</li>
                <li>Electrical Machine lab</li>
                <li>SCADA</li>
                <li>ECAD</li>
                <li>IOT</li>
                <li>Soft Skill</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "POST GRADUATE DIPLOMA IN MECHATRONICS (PDIM)", 
            "Fee": "₹ 54,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "D", 
            "Short": "PDIM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Mechatronics Engineer / Team Leader<br><br>
            After completion of the course, the Trainees will be able to work in are of mechatronics.<br><br>
            <b>Course content</b> - 
            <ul>
                <li>Describe the techniques that are of used to design a mechatronics process</li>
                <li>Analyze different quality control Parameters and conduct audits for different 
                quality standards</li>
                <li>Analysis of the electrical circuits, magnetic circuits, circuit elements, 
                equipment's and accessories, type of sensors, and derives</li>
                <li>Design and manage instrument and sensor networks and associated synchronization problems</li>
                <li>List the technical specifications of high-sensitivity and high frequency measurement 
                equipment, Power devices for engineering tasks</li>
                <li>Generate and update customizable reports
                and data in presentable form, interpret
                drawings, draw interferences and workout
                other technical details</li>
                <li>Design circuits with different elements to
                meet the functionality requirement of
                products</li>
                <li>Identify, formulate, and develop solution for
                maintenance problems</li>
                <li>Prepare conceptual design & test against
                standards & parameters</li>
                <li>Development of modern integrated environments for microcontroller programming and their features
                for simulation, testing and debugging</li>
                <li>Develop the creative solutions using different programming techniques for mechatronics applications,
                including Input Output interface and communication peripherals</li>
                <li>Explain energy flow in electrical, pneumatic and hydraulic sub-systems</li>
                <li>Develop Programmes to actuate a physical system</li>
                <li>Work effectively with others</li>
                <li>Use basic Health and safety practices at work place</li>
                <li>Develop entrepreneurship skills</li>
                <li>Demonstrate the intellectual independence by completing the project work in Mechatronics.</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=95"
        },

        {
            "Name": "POST DIPLOMA IN STRUCTURAL DESIGN & PROJECT MANAGEMENT (PDSPM)", 
            "Fee": "₹ 54,000", 
            "Duration": "1 year",
            "Selection": "First come first serve basis",
            "Duration Type": "L", 
            "Qualification": "D", 
            "Short": "PDSPM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 7<br><br>
            <b>Job Role</b> - Site Engineer / Site Supervisor / Project Assistant<br><br>
            After completion of the course, trainees will able
            to know different type of Structural design &
            Analysis in Detail.<br><br>
            <b>Course content</b> - 
            Auto cad in civil, STAAD –Pro, 3Ds max, Revit
            architecture, Adobe Photoshop, GPS, MS office,
            Total station, Strength of material, Estimating&
            costing, Engineering drawing, Soft Skill, DGPS,
            Survey, Auto Level
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=93"
        },

        {
            "Name": "ADVANCED DIPLOMA IN STRUCTURAL DESIGN & ANALYSIS (ADSDA)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "ADSDA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Site Engineer / Site Supervisor / Project Assistant<br><br>
            After completion of the course, trainees will able
            to know different type of Structural design &
            Analysis.<br><br>
            <b>Course content</b> - 
            Auto CAD in Civil, STAAD –Pro, 3Ds Max, Revit
            Architecture, Adobe Photoshop, Auto level, GPS,
            MS office, Total station, Strength of material,
            Estimating& costing, Engineering drawing, Soft
            Skill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=109"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN INSPECTION & QUALITY CONTROL (ACCIQ)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "XII", 
            "Short": "ACCIQ",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Quality Control Inspector / Job Inspector<br><br>
            During training, trainees will able to work on Quality
            control & Inspection.<br><br>
            <b>Course content</b> - 
            Engineering Drawing, Engineering Metrology,
            Workshop Calculation, Total Quality Management,
            AutoCAD, Master CAM, NX (UNIGRAPHICS),
            Inspection (CMM), Employability skill, Inspection &
            Quality Control -On Job Training
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=105"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN INSPECTION & QUALITY CONTROL (ACCIQ)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "ACCIQ",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Quality Control Inspector / Job Inspector<br><br>
            During training, trainees will able to work on Quality
            control & Inspection.<br><br>
            <b>Course content</b> - 
            Engineering Drawing, Engineering Metrology,
            Workshop Calculation, Total Quality Management,
            AutoCAD, Master CAM, NX (UNIGRAPHICS),
            Inspection (CMM), Employability skill, Inspection &
            Quality Control -On Job Training
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=105"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN INSPECTION & QUALITY CONTROL (ACCIQ)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GNT", 
            "Short": "ACCIQ",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 5<br><br>
            <b>Job Role</b> - Quality Control Inspector / Job Inspector<br><br>
            During training, trainees will able to work on Quality
            control & Inspection.<br><br>
            <b>Course content</b> - 
            Engineering Drawing, Engineering Metrology,
            Workshop Calculation, Total Quality Management,
            AutoCAD, Master CAM, NX (UNIGRAPHICS),
            Inspection (CMM), Employability skill, Inspection &
            Quality Control -On Job Training
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=105"
        },

        {
            "Name": "ADVANCED DIPLOMA IN COMPUTER HARDWARE NETWORKING & MANAGEMENT (ADCHNM)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "ADCHNM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Hardware & Network Associates / System Service
            Engineer<br><br>
            After completion of the course, the trainees should be
            confident enough to solve day – to –day computer
            related problems.<br><br>
            <b>Course content</b> - 
            Power Supply, PC Architecture, Software Installation,
            Up gradation & Maintenance, Network Essential, setup
            & management, Network management & server
            configuration, LINUX management & network
            configuration, Basic Electronics, Office Package,
            CommunicationSkill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=108"
        },

        {
            "Name": "ADVANCED DIPLOMA IN COMPUTER HARDWARE NETWORKING & MANAGEMENT (ADCHNM)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GNT", 
            "Short": "ADCHNM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Hardware & Network Associates / System Service
            Engineer<br><br>
            After completion of the course, the trainees should be
            confident enough to solve day – to –day computer
            related problems.<br><br>
            <b>Course content</b> - 
            Power Supply, PC Architecture, Software Installation,
            Up gradation & Maintenance, Network Essential, setup
            & management, Network management & server
            configuration, LINUX management & network
            configuration, Basic Electronics, Office Package,
            CommunicationSkill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=108"
        },

        {
            "Name": "ADVANCED DIPLOMA IN COMPUTER HARDWARE NETWORKING & MANAGEMENT (ADCHNM)", 
            "Fee": "₹ 34,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "ADCHNM",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - 6<br><br>
            <b>Job Role</b> - Hardware & Network Associates / System Service
            Engineer<br><br>
            After completion of the course, the trainees should be
            confident enough to solve day – to –day computer
            related problems.<br><br>
            <b>Course content</b> - 
            Power Supply, PC Architecture, Software Installation,
            Up gradation & Maintenance, Network Essential, setup
            & management, Network management & server
            configuration, LINUX management & network
            configuration, Basic Electronics, Office Package,
            CommunicationSkill
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=108"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN SOFTWARE APPLICATION (ACCSA)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "ACCSA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - <br><br>
            <b>Job Role</b> - An ability to identify, critically analyse, formulate
            & develop Computer applications<br><br>
            Prepare trainees who will be successful &
            professional in industry, government, academic,
            entrepreneurial pursuit & consulting firms &
            apply knowledge of Computer Science<br><br>
            <b>Course content</b> - 
            C programming, C++, Core Java, Oracle, html,
            CSS, Advance Java, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=101"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN SOFTWARE APPLICATION (ACCSA)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GNT", 
            "Short": "ACCSA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - <br><br>
            <b>Job Role</b> - An ability to identify, critically analyse, formulate
            & develop Computer applications<br><br>
            Prepare trainees who will be successful &
            professional in industry, government, academic,
            entrepreneurial pursuit & consulting firms &
            apply knowledge of Computer Science<br><br>
            <b>Course content</b> - 
            C programming, C++, Core Java, Oracle, html,
            CSS, Advance Java, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=101"
        },

        {
            "Name": "ADVANCE CERTIFICATE COURSE IN SOFTWARE APPLICATION (ACCSA)", 
            "Fee": "₹ 22,000", 
            "Duration": "6 months (8hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "ACCSA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - <br><br>
            <b>Job Role</b> - An ability to identify, critically analyse, formulate
            & develop Computer applications<br><br>
            Prepare trainees who will be successful &
            professional in industry, government, academic,
            entrepreneurial pursuit & consulting firms &
            apply knowledge of Computer Science<br><br>
            <b>Course content</b> - 
            C programming, C++, Core Java, Oracle, html,
            CSS, Advance Java, Project Work
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=101"
        },

        {
            "Name": "AUTO CAD (MECHANICAL)", 
            "Fee": "₹ 7,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "ACADMECH",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Creating Objects</li>
                <li>Blocks, Attributes & X-ref</li>
                <li>Editing Objects</li>
                <li>Layout, Plotting & Printing</li>
                <li>Layers, Colour & Linetype</li>
                <li>3D Modelling</li>
                <li>Dimensioning & Tolerancing</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=158"
        },

        {
            "Name": "AUTO CAD (MECHANICAL)", 
            "Fee": "₹ 7,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "ACADMECH",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Creating Objects</li>
                <li>Blocks, Attributes & X-ref</li>
                <li>Editing Objects</li>
                <li>Layout, Plotting & Printing</li>
                <li>Layers, Colour & Linetype</li>
                <li>3D Modelling</li>
                <li>Dimensioning & Tolerancing</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=158"
        },

        {
            "Name": "MASTER CAM", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "MCAM",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>2D Drafting</li>
                <li>Toolpath Generation</li>
                <li>Wire Frame Modelling</li>
                <li>Post Processing & DNC</li>
                <li>Surface Modelling</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "MASTER CAM", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "MCAM",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>2D Drafting</li>
                <li>Toolpath Generation</li>
                <li>Wire Frame Modelling</li>
                <li>Post Processing & DNC</li>
                <li>Surface Modelling</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "NX / UNIGRAPHICS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "NX",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Unigraphics</li>
                <li>Concept of Sketch & Constraint</li>
                <li>Drafting & Detailing</li>
                <li>Part Modelling (Solid & Surface)</li>
                <li>Assembly</li>
                <li>UGManufacturing (Milling&Lathe)</li>
                <li>Post Processing & DNC</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "NX / UNIGRAPHICS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "NX",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Unigraphics</li>
                <li>Concept of Sketch & Constraint</li>
                <li>Drafting & Detailing</li>
                <li>Part Modelling (Solid & Surface)</li>
                <li>Assembly</li>
                <li>UGManufacturing (Milling&Lathe)</li>
                <li>Post Processing & DNC</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "CREO", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "CREO",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Creo</li>
                <li>Sketcher & Constraint</li>
                <li>Part Modelling</li>
                <li>Pro Surface</li>
                <li>Assembly Modelling</li>
                <li>Drafting & Detailing</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "CREO", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "CREO",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Creo</li>
                <li>Sketcher & Constraint</li>
                <li>Part Modelling</li>
                <li>Pro Surface</li>
                <li>Assembly Modelling</li>
                <li>Drafting & Detailing</li>
            </ul>
            `,
            "Apply": "#"
        },

    ];

    return course_informations;
}