import React, { useState } from 'react';

export function AppointmentCalendar() {
  const [mesAtual, setMesAtual] = useState<number>(new Date().getMonth());
  const [anoAtual, setAnoAtual] = useState<number>(new Date().getFullYear());
  const [dataSelecionada, setDataSelecionada] = useState<string | null>(null);

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDate();
  const mesAtualReal = dataAtual.getMonth();
  const anoAtualReal = dataAtual.getFullYear();

  const diasDaSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  const nomesDosMeses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const gerarDiasDoMes = (ano: number, mes: number) => {
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const ultimoDia = new Date(ano, mes + 1, 0).getDate();
    const dias = [];
    let semana = [];

    // Preencher com dias vazios para alinhamento do primeiro dia
    for (let i = 0; i < primeiroDia; i++) {
      semana.push('');
    }

    // Preencher com os dias do mês
    for (let dia = 1; dia <= ultimoDia; dia++) {
      semana.push(dia);
      if (semana.length === 7) {
        dias.push(semana);
        semana = [];
      }
    }

    // Preencher o restante da última semana
    if (semana.length > 0) {
      while (semana.length < 7) {
        semana.push('');
      }
      dias.push(semana);
    }

    return dias;
  };

  const diasDoMes = gerarDiasDoMes(anoAtual, mesAtual);

  const selecionarData = (dia: number) => {
    if (dia && !verificarDiaPassado(dia)) {
      const data = `${dia}/${mesAtual + 1}/${anoAtual}`;
      setDataSelecionada(data);
    }
  };

  const irParaMesAnterior = () => {
    if (!(anoAtual === anoAtualReal && mesAtual <= mesAtualReal)) {
      if (mesAtual === 0) {
        setMesAtual(11);
        setAnoAtual(anoAtual - 1);
      } else {
        setMesAtual(mesAtual - 1);
      }
    }
  };

  const irParaProximoMes = () => {
    if (mesAtual === 11) {
      setMesAtual(0);
      setAnoAtual(anoAtual + 1);
    } else {
      setMesAtual(mesAtual + 1);
    }
  };

  const verificarDiaPassado = (dia: number): boolean => {
    return anoAtual === anoAtualReal && mesAtual === mesAtualReal && dia < diaAtual;
  };

  return (
    <div className="flex flex-col justify-center items-start gap-1">
      <div className="flex-col justify-start items-start gap-5 inline-flex">
        <h1 className="text-[#1e1e1e] text-2xl font-extrabold">Escolha a data do atendimento</h1>

        <div className="flex justify-between items-center w-full mb-4">
          <button
            className={`bg-white border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100 ${
              anoAtual === anoAtualReal && mesAtual <= mesAtualReal ? 'cursor-not-allowed opacity-50' : ''
            }`}
            onClick={irParaMesAnterior}
            disabled={anoAtual === anoAtualReal && mesAtual <= mesAtualReal}
          >
            ◀
          </button>
          <div className="text-lg font-bold">
            {nomesDosMeses[mesAtual]} {anoAtual}
          </div>
          <button
            className="bg-white border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100"
            onClick={irParaProximoMes}
          >
            ▶
          </button>
        </div>

        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              {diasDaSemana.map((dia, index) => (
                <th key={index} className="text-center p-2 text-sm font-medium text-gray-700">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {diasDoMes.map((semana, index) => (
              <tr key={index}>
                {semana.map((dia, idx) => (
                  <td
                    key={idx}
                    className={`text-center p-2 border cursor-pointer ${
                      dia ? 'hover:bg-gray-200' : 'bg-gray-100'
                    } ${dia === parseInt(dataSelecionada?.split('/')[0] || '', 10) && anoAtual === parseInt(dataSelecionada?.split('/')[2], 10) ? 'text-white bg-[#214175]' : ''}
                    ${verificarDiaPassado(dia as number) ? 'cursor-not-allowed text-gray-400' : ''}
                    `}
                    onClick={() => selecionarData(dia as number)}
                  >
                    {dia}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {dataSelecionada && (
          <div className="mt-4">
            <p className="text-lg">
              <strong>Data selecionada:</strong> {dataSelecionada}
            </p>
          </div>
        )}

        <button className="mt-4 px-6 py-2 bg-[#214175] text-white rounded-md hover:bg-[white] hover:text-[#214175]">
          Confirmar data
        </button>
      </div>
    </div>
  );
}
