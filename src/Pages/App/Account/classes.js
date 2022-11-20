export const classes ={
    page:'h-[1080px] w-[100vw] px-[15px] py-[15px]',
    accountCard:{
        body:'w-[100%] h-[100%] bg-[#fff] rounded-[20px] px-[20px] py-[20px] flex',
        backbutton:'absolute top-[30px] left-[30px]',
        Profile:{
            body:'no:w-[100%] md:w-[50%] h-[100%] flex flex-col justify-center items-center',
            heading:{
                body:'w-[100%] h-[10%] flex justify-center items-center',
                text:'font-[Arial] text-[#677094] text-[25px] font-[700]'
            },
            formContainer:{
                body:'w-[100%] h-[90%] no:border-none md:border-r-2 md:border-solid md:border-[#677094] flex flex-col justify-center items-center no:py-[20px] md:py-[0px]',
                profileIcon:'no:w-[100px] no:min-h-[100px] md:min-h-[200px] md:mt-[0px] no:h-[100px] md:w-[200px] md:h-[200px] rounded-[50%] bg-[#5775E8] flex justify-center items-center font-[Arial] font-[700] text-[#fff] no:text-[40px] md:text-[70px]',
                form:{
                    body:'no:w-[90%] md:w-[80%] h-[80%] flex flex-col justify-center items-center mt-[50px]',
                    card:{
                        body:'flex w-[100%] mb-[10px] no:flex-wrap md:flex-nowrap',
                        fieldOne:{
                            body:'flex flex-col no:w-[100%] md:w-[50%] md:mr-[20px] no:mt-[5px] md:mt-[0px]',
                            label:'text-[#272343] font-[Arial] text-[15px] font-[700]',
                            input:'border-[1px] border-solid border-[#000] font-[Arial] w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px]',
                            select:'border-[1px] border-solid border-[#000] font-[Arial] w-[100%] font-[700] text-[#677094] text-[17px] pl-[5px] h-[40px] outline-none'
                        },
                    button:'bg-[#EED132] text-[#FFF] md:mt-[30px] no:w-[150px] md:w-[200px] min-h-[28px] no:h-[35px] md:h-[35px] rounded-[40px] font-[Arial] no:text-[18px] md:text-[18px] font-[700] hover:bg-[rgba(238,209,50,0.8)]',
                    }
                },
                changePassword:'w-[100%] font-[Arial] font-[700] text-[#677094] text-[17px] mt-[10px]'
            },
        myPost:{
            body:'w-[50%] h-[100%] no:hidden md:flex px-[10px] py-[10px] flex flex-col justify-start items-center overflow-y-scroll',
            heading:'font-[Arial] text-[#677094] text-[25px] font-[700] mb-[10px]',
            post:'w-[100%] h-[180px] border-[1px] border-solid border-[#272343] flex justify-center items-center rounded-[20px] mb-[10px]'
        }
        }
    }
}