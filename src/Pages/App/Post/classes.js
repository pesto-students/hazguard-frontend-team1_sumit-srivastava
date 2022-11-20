export const classes = {
    page:{
        body:'w-[100vw] h-[100vh] px-[15px] py-[15px]',
        card:{
            body:'w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[20px] py-[20px] overflow-y-hidden',
            heading:{
                body:'w-[100%] h-[5%] flex justify-between items-center py-[10px]',
                name:'font-[Arial] font-[700] text-[#677094] no:text-[12px] md:text-[20px]',
                date:'font-[Arial] font-[700] text-[#677094] no:text-[12px] md:text-[20px]'
            },
            problem:{
                body:'w-[100%] h-[30%] flex flex-col justify-center items-start py-[20px] no:leading-[18px] md:leading-[25px]',
                title:'font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[24px]',
                statement:'font-[Arial] font-[700] text-[#272343] no:text-[15px] md:text-[20px] no:leadin4rempx] md:leading-[21px] no:overflow-y-scroll md:overflow-auto'
            },
            solution:{
                body:'w-[100%] h-[65%] flex justify-center items-start flex-wrap',
                text:{
                    body:'no:w-[100%] md:w-[50%] no:h-[70%] md:h-[100%] overflow-y-scroll',
                    title:'font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[24px] no:leading-[19px] md:leading-[25px]',
                    statement:'font-[Arial] font-[700] text-[#677094] no:text-[15px] md:text-[18px] no:leading-[17px] md:leading-[20px] py-[10px]'
                },
                image:{
                    body:'no:w-[100%] md:w-[50%] no:h-[30%] md:h-[90%] flex flex-wrap justify-center items-start self-center overflow-y-scroll',
                    singleImage:'no:w-[50%] no:h-[100%] md:w-[50%] md:h-[50%]'
                }
            }
        }
    }
}