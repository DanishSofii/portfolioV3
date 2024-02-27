const skills = ["HTML","CSS","JavaScript","React JS","Node JS","Express JS","MySql","Tailwind","Ejs","Npm","GitHub","MongoDB"]

function Skills() {
    return (
        <div id="skills" className=" bg-slate-900 h-[55vh] md:h-[50vh] p-[2rem] md:p-[3rem] lg:p-[8rem] flex justify-center items-center flex-col">
            <h1 className="text-slate-50">SKILLS</h1>
            <div>
                <ul className="flex justify-around align-center flex-wrap" >
                {skills.map((skill,index)=>(
                    <li key={index} className="text-slate-50 flex justify-center items-center flex-wrap font-thin w-[5rem] m-[0.5rem] h-10 md:m-[1rem] md:h-12 md:w-20 bg-slate-700 border border-slate-50 outline-none rounded-sm hover:bg-slate-600 gradient-border">{skill}</li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Skills
