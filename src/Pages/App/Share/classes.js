export const classes = {
    page:{
        body:'w-[100vw] h-[100vh] flex flex-col justify-center items-center pb-[30px]',
        maincard:'w-[100%] h-[calc(100%-180px)] flex justify-center items-center mt-[30px] no:px-[15px] md:px-[30px] no:flex-wrap md:flex-nowrap',
        cardOne:{
            body:'no:w-[100%] md:w-[50%] h-[100%] bg-[#fff] rounded-[20px] no:mb-[15px] md:mb-[0px] md:mr-[15px] px-[20px] py-[20px] flex justify-center items-center flex-col',
            heading:'font-[Arial] font-[700] text-[#272343] text-[20px] mb-[30px] self-start',
            formOne:{
                body:'w-[100%] h-[100%] flex flex-col justify-start items-center',
                field:{
                    body:'w-[90%] flex flex-col justify-center items-start mb-[30px]',
                    label:'font-[Arial] font-[400] text-[#272343] text-[18px]',
                    select:'border-[1px] border-solid border-[#272343] w-[100%] h-[40px] text-center'
                },
                button:'self-center bg-[#EED132] w-[150px] h-[40px] rounded-[20px] font-[Arial] font-[700] text-[#fff] text-[20px]'
            },
            formTwo:{
                body:'no:w-[100%] md:w-[50%] h-[100%] bg-[#fff] rounded-[20px] no:mt-[15px] md:mt-[0px] md:ml-[15px] px-[20px] py-[20px] flex flex-col justify-start items-center',
                heading:'font-[Arial] font-[700] text-[#272343] text-[20px] mb-[30px] self-start',
                field:{
                    body:'w-[100%] flex flex-col justify-center items-center mb-[30px]',
                    label:'self-start font-[Arial] font-[400] text-[#272343] text-[18px]',
                    textarea:'border-[1px] border-solid border-[#272343] w-[100%] max-h-[200px] px-[10px] py-[10px] font-[Arial] font-[500] text-[#677094] text-[20px]'
                },
                button:'self-center bg-[#EED132] w-[150px] h-[40px] rounded-[20px] font-[Arial] font-[700] text-[#fff] text-[20px]'
            }
        }
    }
}