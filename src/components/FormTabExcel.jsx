import { useRef } from 'react';
import { Input, Button, Label } from '@fluentui/react-components'

const FormTabExcel = () => {
    const inputManPower = useRef(null)
    const inputOferta = useRef(null)

    function handleTemplateFileChange(event) {
        const file = event.target.files[0];
        if (file) {
            inputManPower.current.value = file.name
        }
    }

    const handleOfertasFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            inputOferta.current.value = file.name
        }
        // const inputt = document.getElementById("ofertaFileInput");
        // console.log(inputt.value)
    };

    const openFileDialog = (fileInputId) => {
        document.getElementById(fileInputId).click();
    };
    return (
        <div className="max-w-lg mx-auto p-4 bg-gray-100 rounded-md shadow-md">
            <div className="mb-4 flex flex-col">
                <Label size={"medium"} >
                    Seleccione excel ManPower
                </Label>
                <Input ref={inputManPower} onClick={() => openFileDialog('templateFileInput')} placeholder='Click para buscar el excel' />
                <div className='flex justify-end mt-2 gap-1'>
                    <input
                        id="templateFileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleTemplateFileChange}
                    />
                    <Button onClick={() => { }} size='medium'>Cargar</Button>
                </div>
            </div>
            <div className="mb-4 flex flex-col">
                <Label size={"medium"} >
                    Seleccione excel Oferta
                </Label>
                <Input ref={inputOferta} onClick={() => openFileDialog('ofertaFileInput')} placeholder='Click para buscar el excel' />
                <div className='flex justify-end gap-1 mt-2'>
                    <input
                        id="ofertaFileInput"
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleOfertasFileChange}
                    />
                    <Button onClick={() => { }} size='medium' >Cargar</Button>
                </div>
            </div>
        </div>
    )
}

export default FormTabExcel;	