import { Blocks, CodeXml, PencilSparkles } from 'lucide-react'
export default function Cards() {
    return (
        <>
            <section className='section bg-light'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 g-5 ">
                        <div className="col d-flex flex-column align-items-center justify-content-center gap-4">
                            <div><Blocks size={40} /></div>
                            <div className='d-flex align-items-center justify-content-center flex-column text-center gap-1'>
                                <div className='text-black fs-6 fw-medium'>
                                    Custom Builder Blocks
                                </div>
                                <div className='text-secondary fs-13'>
                                    The Visual Composer is a great plugin, but combined with the Total theme it is out of this world! We’ve extended the builder to bring you many  unique and highly customizable modules.
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column align-items-center justify-content-center gap-4">
                            <div><CodeXml size={40} /></div>
                            <div className='d-flex align-items-center justify-content-center flex-column text-center gap-1'>
                                <div className='text-black fs-6 fw-medium'>
                                    Efficient & Clean Code
                                </div>
                                <div className='text-secondary fs-13'>
                                    We take pride in coding quality themes, we don’t “steal” any code or take any shortcuts. We also keep our themes updated constantly to ensure everything is as well optimized as it can be.
                                </div>
                            </div>
                        </div>
                        <div className="col d-flex flex-column align-items-center justify-content-center gap-4">
                            <div><PencilSparkles size={35} /></div>
                            <div className='d-flex align-items-center justify-content-center flex-column text-center gap-1'>
                                <div className='text-black fs-6 fw-medium'>
                                    Custom Skins
                                </div>
                                <div className='text-secondary fs-13'>
                                    Easily change your site design with a click of a button in the advanced skins dashboard of the Total Theme. You can even create  your own skins via a child theme or plugin!
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
