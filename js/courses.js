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
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=234"
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
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=234"
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
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=233"
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
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=233"
        },

        {
            "Name": "CATIA", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "CATIA",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Sketcher & Constraint</li>
                <li>Part Design</li>
                <li>Wireframe & Surface Design</li>
                <li>Assembly & Kinematics</li>
                <li>Drafting & Detailing</li>
                <li>CATIA CAM</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=159"
        },

        {
            "Name": "CATIA", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "CATIA",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Sketcher & Constraint</li>
                <li>Part Design</li>
                <li>Wireframe & Surface Design</li>
                <li>Assembly & Kinematics</li>
                <li>Drafting & Detailing</li>
                <li>CATIA CAM</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=159"
        },

        {
            "Name": "HYPERMESH", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "HMESH",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to FEA & Hypermesh</li>
                <li>Mesh Analysis</li>
                <li>Pre- processing</li>
                <li>Optistruct</li>
                <li>2D Meshing, 3D Meshing</li>
                <li>Introduction to Hyperform</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "HYPERMESH", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "HMESH",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to FEA & Hypermesh</li>
                <li>Mesh Analysis</li>
                <li>Pre- processing</li>
                <li>Optistruct</li>
                <li>2D Meshing, 3D Meshing</li>
                <li>Introduction to Hyperform</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "SOLIDWORKS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "SLDWRK",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Sketcher & Constraint</li>
                <li>Part Design</li>
                <li>Wireframe & Surface Design</li>
                <li>Assembly & Kinematics</li>
                <li>Drafting & Detailing</li>
                <li>Core & Cavity Extraction</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=160"
        },

        {
            "Name": "SOLIDWORKS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 months (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "SLDWRK",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Sketcher & Constraint</li>
                <li>Part Design</li>
                <li>Wireframe & Surface Design</li>
                <li>Assembly & Kinematics</li>
                <li>Drafting & Detailing</li>
                <li>Core & Cavity Extraction</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=160"
        },

        {
            "Name": "ANSYS", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "ANSYS",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to FEA & ANSYS</li>
                <li>Structural Analysis (Linear, Non Linear, Dynamic)</li>
                <li>Thermal Analysis (Steady State & Transient)</li>
                <li>Couple Field Analysis</li>
            </ul>
            ** All the above content will be covered using latest APDL & Workbench version
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=161"
        },

        {
            "Name": "ANSYS", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "ANSYS",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to FEA & ANSYS</li>
                <li>Structural Analysis (Linear, Non Linear, Dynamic)</li>
                <li>Thermal Analysis (Steady State & Transient)</li>
                <li>Couple Field Analysis</li>
            </ul>
            ** All the above content will be covered using latest APDL & Workbench version
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=161"
        },

        {
            "Name": "3D Printing", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "3DPRNT",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Comparison of Subtractive & Additive Manufacturing</li>
                <li>Classification of Additive Manufacturing</li>
                <li>New Technologies Used in the field of Additive Manufacturing</li>
                <li>Introduction to 3D Printing</li>
                <li>Technology Used & Advantage over Subtractive Manufacturing</li>
                <li>Demonstration of Ideamaker</li>
                <li>Introduction to Idea 3D printer</li>
                <li>Demonstration of 3D printing machine</li>
                <li>Demonstration of metal 3D printing machine</li>
                <li>Working Procedure & process chain</li>
                <li>Post Processing procedures</li>
                <li>Introduction to 3D scanning</li>
                <li>Scan data creation and scanning methodology</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "3D Printing", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "3DPRNT",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Comparison of Subtractive & Additive Manufacturing</li>
                <li>Classification of Additive Manufacturing</li>
                <li>New Technologies Used in the field of Additive Manufacturing</li>
                <li>Introduction to 3D Printing</li>
                <li>Technology Used & Advantage over Subtractive Manufacturing</li>
                <li>Demonstration of Ideamaker</li>
                <li>Introduction to Idea 3D printer</li>
                <li>Demonstration of 3D printing machine</li>
                <li>Demonstration of metal 3D printing machine</li>
                <li>Working Procedure & process chain</li>
                <li>Post Processing procedures</li>
                <li>Introduction to 3D scanning</li>
                <li>Scan data creation and scanning methodology</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "VLSI", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "VLSI",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction of VLSI</li>
                <li>Semiconductor Physics</li>
                <li>Analog/ Digital Electronics, EDA Tools</li>
                <li>CMOS & layout design using MICROWIND</li>
                <li>VHDL & Verilog HDL programming & simulation using XILINX & ALTERA QUARTUS</li>
                <li>Interfacing of PLDs (SPARTAN, VIRETEX, CYCLONE)</li>
                <li>Analog circuit design and verification through FPAA using ANADIGM</li>
                <li>Basics of Microcontroller</li>
                <li>Project Work</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "VLSI", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "VLSI",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction of VLSI</li>
                <li>Semiconductor Physics</li>
                <li>Analog/ Digital Electronics, EDA Tools</li>
                <li>CMOS & layout design using MICROWIND</li>
                <li>VHDL & Verilog HDL programming & simulation using XILINX & ALTERA QUARTUS</li>
                <li>Interfacing of PLDs (SPARTAN, VIRETEX, CYCLONE)</li>
                <li>Analog circuit design and verification through FPAA using ANADIGM</li>
                <li>Basics of Microcontroller</li>
                <li>Project Work</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "PLC", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "PLC",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Instrumentation in process industry</li>
                <li>Introduction of SCAD</li>
                <li>One line diagram & wiring guidelines</li>
                <li>PLC Hardware Components</li>
                <li>Power supply CPU</li>
                <li>I/O Communications</li>
                <li>Pneumatic and electro pneumatics</li>
                <li>Counter file handling</li>
                <li>SCADA Applications</li>
                <li>Application of Electrical Drivers</li>
                <li>PLC software timers</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=162"
        },

        {
            "Name": "PLC", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "PLC",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Instrumentation in process industry</li>
                <li>Introduction of SCAD</li>
                <li>One line diagram & wiring guidelines</li>
                <li>PLC Hardware Components</li>
                <li>Power supply CPU</li>
                <li>I/O Communications</li>
                <li>Pneumatic and electro pneumatics</li>
                <li>Counter file handling</li>
                <li>SCADA Applications</li>
                <li>Application of Electrical Drivers</li>
                <li>PLC software timers</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=162"
        },

        {
            "Name": "ADVANCED EMBEDDED SYSTEM", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "AES",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Embedded Systems</li>
                <li>Assembly & Embedded 'C' Programming</li>
                <li>Addressing of 8051</li>
                <li>P1C18 & ARM 7 using RIDE</li>
                <li>PROTEUS, MPLAB, KEIL & Crosswire</li>
                <li>VHDL Programming</li>
                <li>Interfacing of peripheral devices with 8051, p1C18 & ARM 7</li>
                <li>PCB desgining robotics</li>
                <li>Project Work</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=164"
        },

        {
            "Name": "ADVANCED EMBEDDED SYSTEM", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "AES",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to Embedded Systems</li>
                <li>Assembly & Embedded 'C' Programming</li>
                <li>Addressing of 8051</li>
                <li>P1C18 & ARM 7 using RIDE</li>
                <li>PROTEUS, MPLAB, KEIL & Crosswire</li>
                <li>VHDL Programming</li>
                <li>Interfacing of peripheral devices with 8051, p1C18 & ARM 7</li>
                <li>PCB desgining robotics</li>
                <li>Project Work</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=164"
        },

        {
            "Name": "HYDRAULICS & PNEUMATICS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "HNP",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Symbols of Values & Method of Actuation</li>
                <li>Signal Processing Elements</li>
                <li>Pressure Regulators</li>
                <li>Pressure sequence value</li>
                <li>Time depend control value</li>
                <li>Exercises on pneumatic values & regulators</li>
                <li>Electro pneumatics and hydraulics</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=221"
        },

        {
            "Name": "HYDRAULICS & PNEUMATICS", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "HNP",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Symbols of Values & Method of Actuation</li>
                <li>Signal Processing Elements</li>
                <li>Pressure Regulators</li>
                <li>Pressure sequence value</li>
                <li>Time depend control value</li>
                <li>Exercises on pneumatic values & regulators</li>
                <li>Electro pneumatics and hydraulics</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=221"
        },

        {
            "Name": "SURYAMITRA", 
            "Fee": "₹ 12,000", 
            "Duration": "3 months (300hrs)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "D", 
            "Short": "SMTRA",
            "Image": "images/test.jpg",
            "Description": `<b>NSQF Level</b> - <br><br>
            <b>Job Role</b> - Skilled Technician<br><br>
            After completion of the course, the Trainees will be able
            to install &maintain a stand-alone or grid connected
            photo voltaic power system.<br><br>
            <b>Course content</b> - 
            Basic Electricals, Semiconductor Physics, Soldering
            Technique, Basic Terminology of Solar System, Fundamental of Solar PVcell & Panel,
            Entrepreneurship, Soft Skill, Troubleshooting of Solar
            PV System
            `,
            "Apply": "#"
        },

        {
            "Name": "SURYAMITRA", 
            "Fee": "₹ 12,000", 
            "Duration": "3 months (300hrs)",
            "Selection": "First come first serve basis",
            "Duration Type": "M", 
            "Qualification": "GT", 
            "Short": "SMTRA",
            "Image": "images/test.jpg",
            "Description": `
            <b>NSQF Level</b> - <br><br>
            <b>Job Role</b> - Skilled Technician<br><br>
            After completion of the course, the Trainees will be able
            to install &maintain a stand-alone or grid connected
            photo voltaic power system.<br><br>
            <b>Course content</b> - 
            Basic Electricals, Semiconductor Physics, Soldering
            Technique, Basic Terminology of Solar System, Fundamental of Solar PVcell & Panel,
            Entrepreneurship, Soft Skill, Troubleshooting of Solar
            PV System
            `,
            "Apply": "#"
        },

        {
            "Name": "AUTO CAD (CIVIL)", 
            "Fee": "₹ 7,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "ACADCIVIL",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Basic concept of Drawing</li>
                <li>Auto CAD 2D & 3D Building</li>
                <li>Inertial Design</li>
                <li>Working Drawing</li>
                <li>Steel Structure Detailed Drawing</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=165"
        },

        {
            "Name": "AUTO CAD (CIVIL)", 
            "Fee": "₹ 7,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "ACADCIVIL",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Basic concept of Drawing</li>
                <li>Auto CAD 2D & 3D Building</li>
                <li>Inertial Design</li>
                <li>Working Drawing</li>
                <li>Steel Structure Detailed Drawing</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=165"
        },

        {
            "Name": "STAAD PRO", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "STADD",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Basic concept of 2D & 3D in Auto CAD</li>
                <li>Creating Geometry using different methods in X, Y, Z co-ordinates</li>
                <li>Defining beams, columns and plates</li>
                <li>Support and properties system</li>
                <li>Different steel and load systems</li>
                <li>Analysis with concrete and steel</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=166"
        },

        {
            "Name": "STAAD PRO", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "STADD",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Basic concept of 2D & 3D in Auto CAD</li>
                <li>Creating Geometry using different methods in X, Y, Z co-ordinates</li>
                <li>Defining beams, columns and plates</li>
                <li>Support and properties system</li>
                <li>Different steel and load systems</li>
                <li>Analysis with concrete and steel</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=166"
        },

        {
            "Name": "3Ds Max", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "3DMAX",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to 3Ds Max</li>
                <li>Plan Conversion from Auto CAD</li>
                <li>Usage of Standard Primitives, Compound Object, Shapes</li>
                <li>Copy, Move, Rotate & other Standard Modification tools</li>
                <li>Creation of Door, Window, Stair, Railing, AEC Wall, Foilage</li>
                <li>Material library, control panel</li>
                <li>Interior design techniques</li>
                <li>Types of camera & light, rendering & exporting</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=167"
        },

        {
            "Name": "3Ds Max", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "3DMAX",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to 3Ds Max</li>
                <li>Plan Conversion from Auto CAD</li>
                <li>Usage of Standard Primitives, Compound Object, Shapes</li>
                <li>Copy, Move, Rotate & other Standard Modification tools</li>
                <li>Creation of Door, Window, Stair, Railing, AEC Wall, Foilage</li>
                <li>Material library, control panel</li>
                <li>Interior design techniques</li>
                <li>Types of camera & light, rendering & exporting</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=167"
        },

        {
            "Name": "REVIT", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "D", 
            "Short": "REVIT",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to REVIT</li>
                <li>Set up of Units & Element Properties</li>
                <li>Annotating Presentation Tools</li>
                <li>Architectural Modelling</li>
                <li>Rendering & Lighting</li>
                <li>Editing Tools & Managing Views</li>
                <li>Printing, Export/ Import</li>
                <li>Circulation Elements</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=210"
        },

        {
            "Name": "REVIT", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "REVIT",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to REVIT</li>
                <li>Set up of Units & Element Properties</li>
                <li>Annotating Presentation Tools</li>
                <li>Architectural Modelling</li>
                <li>Rendering & Lighting</li>
                <li>Editing Tools & Managing Views</li>
                <li>Printing, Export/ Import</li>
                <li>Circulation Elements</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=210"
        },

        {
            "Name": "MAT LAB (Elect.)", 
            "Fee": "₹ 8,000", 
            "Duration": "15 days (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "MATLABE",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Parallel Computing</li>
                <li>Math, Statics & Optimization</li>
                <li>Control System Design & Analysis</li>
                <li>Signal Processing & Communications</li>
                <li>Test & Measurement</li>
                <li>Code Generation & Verification</li>
                <li>Application Development</li>
                <li>Database Connectivity & Reporting</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=171"
        },

        {
            "Name": "INTERNET OF THINGS (IOT)", 
            "Fee": "₹ 8,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "IOT",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to IOT</li>
                <li>Physical & Logical Design of IOT</li>
                <li>IOT Enabling Technologies</li>
                <li>IOT Levels & Deployment Template</li>
                <li>Domain Specific IOTs</li>
                <li>M2M Communication</li>
                <li>IOT System Management</li>
                <li>Platform Design Methodology</li>
                <li>Cloud Computing</li>
                <li>Data Analytics of IOT</li>
                <li>Python</li>
                <li>Hands on with Arduino, Raspberry Pi, Intel Edison</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "CORE JAVA", 
            "Fee": "₹ 5,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "CJAVA",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Object oriented programming concepts</li>
                <li>Input & Output in JAVA</li>
                <li>Polymorphism</li>
                <li>Interface in JAVA</li>
                <li>Exception Handling</li>
                <li>SWING, Networking in JAVA</li>
                <li>JAVA Database Connectivity</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=219"
        },

        {
            "Name": "Advance JAVA", 
            "Fee": "₹ 5,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "AJAVA",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>JAVA Database Connectivity</li>
                <li>JAVA Server Pages (JSP)</li>
                <li>JAVA Standard Tag Library (JSTL)</li>
                <li>JAVA Transaction Service (JTS)</li>
                <li>JAVA Transaction API (JTA)</li>
                <li>JAVA MAIL, API, HTML, XML</li>
                <li>JAVA Script</li>
                <li>Mini – Projects Based on MVC Architecture</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=219"
        },

        {
            "Name": ".NET", 
            "Fee": "₹ 5,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "DOTNET",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>C#.NET & VB.NET</li>
                <li>ASP</li>
                <li>XML & Web Services</li>
                <li>ADO.NET 2.0 using C#.NET/ VB.NET</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "PROGRAMMING IN ‘C’", 
            "Fee": "₹ 3,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "CLANG",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>C Tokens</li>
                <li>Control Statements</li>
                <li>Array</li>
                <li>Pointer</li>
                <li>String</li>
                <li>Pre Processor</li>
                <li>Function</li>
                <li>Structure & Union</li>
                <li>Dynamic Memory Management</li>
                <li>File</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=220"
        },

        {
            "Name": "PROGRAMMING IN ‘C++’", 
            "Fee": "₹ 3,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "CPP",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Basic Syntax</li>
                <li>Control Statements</li>
                <li>Array</li>
                <li>Pointer</li>
                <li>String</li>
                <li>Function</li>
                <li>Class & Objective</li>
                <li>Friend Function</li>
                <li>Constructor & Destructor</li>
                <li>Inheritance</li>
                <li>Virtual Function</li>
                <li>Name Space</li>
                <li>Exception Handling</li>
                <li>Template</li>
                <li>File</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "HARDWARE & NETWORKING", 
            "Fee": "₹ 5,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "HNN",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Computer Fundamentals & MS DOS</li>
                <li>Computer Architecture</li>
                <li>Network Fundamentals</li>
                <li>System Management & Troubleshooting</li>
            </ul>
            `,
            "Apply": "https://cttc.mfgelearning.com/about-courses.php?id=230"
        },

        {
            "Name": "ENTREPRENEURSHIP DEVELOPMENT PROGRAMME", 
            "Fee": "₹ 3,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "EDP",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Entrepreneurial Persons</li>
                <li>Computer Architecture</li>
                <li>Entrepreneurial Communities</li>
                <li>Entrepreneurial Process</li>
                <li>What Does Entrepreneur Do?</li>
                <li>Entrepreneurship & Environment</li>
                <li>Business Terms</li>
                <li>Case Study on Business Secrets</li>
                <li>Steps in Planning New Facilities</li>
                <li>Selection of an appropriate form of Ownership Structure</li>
                <li>Search for Location</li>
                <li>Market Research</li>
                <li>Marketing Survey</li>
                <li>Barriers in Business</li>
                <li>Problem Solving Techniques</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "LAPTOP MAINTENANCE", 
            "Fee": "₹ 4,500", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "LM",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Analog Electronics</li>
                <li>Type of Power Supply</li>
                <li>Identification of different parts of Laptop</li>
                <li>Block Diagram of Laptop & its Function</li>
                <li>Laptop Assembling & Disassembling</li>
                <li>Installation of Operating System Application & Software's fault
                finding procedure of Laptop</li>
                <li>Common problem of different motherboard & its troubleshooting</li>
            </ul>
            `,
            "Apply": "#"
        },

        {
            "Name": "COMMUNICATION SKILL", 
            "Fee": "₹ 3,000", 
            "Duration": "1 month (3hrs/Day)",
            "Selection": "First come first serve basis",
            "Duration Type": "S", 
            "Qualification": "GT", 
            "Short": "COMMSKL",
            "Image": "images/test.jpg",
            "Description": `
            <b>Course content</b> - 
            <ul>
                <li>Introduction to the World of Soft Skill</li>
                <li>Identifying self Personality</li>
                <li>Self Assessment Model Tests</li>
                <li>Presentation & Public Speaking</li>
                <li>Multiple Intelligence Check</li>
                <li>Group Discussion</li>
                <li>HR Interview Techniques</li>
                <li>Thematic Apperception Test</li>
            </ul>
            `,
            "Apply": "#"
        },

    ];

    return course_informations;
}