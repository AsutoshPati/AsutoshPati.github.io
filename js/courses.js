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
            Equivalent to Diploma in Mechanical Engg. With
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
            Combined subjects of Mechanical, Electrical &
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
            "Description": `As per NCVT Syllabus<br><br>
            Course location - CTTC, Bhubaneswar`,
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
            "Description": `As per NCVT Syllabus<br><br>
            Course location - CTTC, Kalinga nagar, Jajpur`,
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
            "Description": `As per NCVT Syllabus<br><br>
            Course location - CTTC, Kalinga nagar, Jajpur`,
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - Skilled Technician/Tool and Die Maker<br><br>
            After completion of the course, the trainees will be able
            to handle all types of machine as well as can
            manufacture different types of tool & die.<br><br>
            <b>Semester-I</b> : Production technology, Auto CAD, Part
            Programming, Master Cam, Press Tool Design, CNC
            Technology, Engineering Drawing, Material
            Technology, Metrology, Press Tool Theory.<br><br>
            <b>Semester-II</b> : Press Tool Design, Mold Manufacturing,
            Modern Manufacturing Technology, Jigs and Fixture,
            Mold Theory, Communicative English, Industrial
            Management, In plant Training & Project Work.
            `,
            "Apply": "#"
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - Skilled Technician/Tool and Die Maker<br><br>
            After completion of the course, the trainees will be able
            to handle all types of machine as well as can
            manufacture different types of tool & die.<br><br>
            <b>Semester-I</b> : Production technology, Auto CAD, Part
            Programming, Master Cam, Press Tool Design, CNC
            Technology, Engineering Drawing, Material
            Technology, Metrology, Press Tool Theory.<br><br>
            <b>Semester-II</b> : Press Tool Design, Mold Manufacturing,
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
            "Description": `NSQF Level - 3<br><br>
            Job Role - Technician / Machine Tool Operator<br><br>
            After completion of the course, the Trainees will
            be able to do machining operation in all
            conventional machines as well as can
            manufacture components.<br><br>
            <b>Course content</b> : Conventional Machine Practice, Machine Shop -
            Theory, Engineering Metrology, Engineering
            Drawing, Workshop Calculation and Science,
            Employability Skills
            `,
            "Apply": "#"
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - Skilled Conventional and CNC Machine Operator<br><br>
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
            "Apply": "#"
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - Maintenance Technician<br><br>
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
            "Apply": "#"
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - CNC Operator<br><br>
            After completion of the course, the trainees will be able
            to handle all tool room machine (Conventional & CNC
            Machines) manufacture any type of job according to the
            demand, independently in CNC machining area.<br><br>
            CNC Programming & CNC Machining, Engineering
            Metrology and Quality Assurance-THEORY &
            PRACTICAL, Production Planning & Controls,
            Computer Aided Manufacturing (Master Cam),
            Advance Cam (DEL CAM – 3 Axis And 5 Axis), Total
            quality management, Fundamentals of Metal Cutting
            Tool, Entrepreneurship, Project Work
            `,
            "Apply": "#"
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
            "Description": `NSQF Level - 5<br><br>
            Job Role - Welding Technician<br><br>
            After completion of the course, the Trainees will be able
            to do all kind of fabrication work using various welding
            methods as well as can inspect the welding, identify the
            defects & can make the remedies.<br><br>
            Personality Development & Computer Literacy, Engg.
            Calculation & Science, Engg. Drawing, Welding
            Technology (Theory), Welding Techniques using
            Various Weld Methods
            `,
            "Apply": "#"
        },


    ];

    return course_informations;
}