import {useState} from 'react';

export function AppointmentSchedule(){
    const [selectUnidade, setSelectUnidade] = useState<string>('sede_sefaz');

    const handleUnidadeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectUnidade(event.target.value);
    }

    const getEndereco = (): string => {
        switch (selectUnidade){
            case 'sede_sefaz':
                return 'R. Arão Lins de Andrade, 260 - Piedade, Jaboatão dos Guararapes - PE, 54310-335';
            case 'regional1_jaboatao':
                return 'Av. Bernardo Vieira de Melo, 2200 - Piedade, Jaboatão dos Guararapes - PE, 54410-000';
            case 'defensoria_publica_estado':
                return 'R. José de Alencar, 116 - Boa Vista, Recife - PE, 50070-060';
            default:
                return'';
            }
    }

    return (
        <div className='flex-col justify-center items-start gap-1'>   
            <div className='flex-col justify-start items-start gap-5 inline-flex'>
                <h1 className="'text-[#1e1e1e] text-2xl font-extrabold">Agendamento para atendimento</h1>
                <div className='flex-col justify-start items-start gap-2 inline-flex'>
                    <label>Selecione o tipo de serviço</label>
                    <select name="imposto" className="h-auto pl-4 pr-2 py-1 rounded-md border border-[#b6b6b6] justify-end items-start inline-flex">
                        <option value="iptu">IPTU</option>
                        <option value="iss">ISS</option>
                        <option value="itbi">ITBI</option>
                    </select>
                </div>
                <div className='flex-col justify-start items-start gap-2 inline-flex'>
                    <label>Selecione o local do atendimento</label>
                    <select name="unidade" value={selectUnidade} onChange={handleUnidadeChange} className="h-auto pl-4 pr-2 py-1 rounded-md border border-[#b6b6b6] justify-end items-start inline-flex">
                        <option value="sede_sefaz">SEFAZ</option>
                        <option value="regional1_jaboatao">Regional Jaboatão</option>
                        <option value="defensoria_publica_estado">Defensoria Pública do Estado</option>
                    </select>
                    <p>
                        <strong>Endereço:</strong> {getEndereco()}
                    </p>
                </div>
                <div>
                    <label>Escolha a data do atendimento</label>
                </div>
            </div>
        </div>
    )
}