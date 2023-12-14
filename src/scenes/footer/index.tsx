import Logo from "@/assets/Logo.png"
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
            <div className='justify-centent mx-auto w-5/6 gap-16 md:flex'>
                <div className="mt-16 basis-1/2 md:mt:-0">
                    <img src={Logo} alt="" />
                    <p className="my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a gall
                    </p>
                    <p>© Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt:-0">
                    <h4 className="font-bold">Links</h4> 
                    <p className="my-5"> Mass Orci Secnari</p>
                    <p className="my-5"> ad id vat diem</p>
                    <p >kill every ting</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt:-0">
                    <h4 className="font-bold">Contact US</h4> 
                    <p className="my-5"> Fortis admenri diem</p>
                    <p className="my-5"> Vietus Darie vano</p>
                    <p> (+62)812 1311 226</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer