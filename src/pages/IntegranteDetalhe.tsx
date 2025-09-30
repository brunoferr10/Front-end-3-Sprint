
import { useParams, Link, useNavigate } from "react-router-dom";
import { integrantes } from "./Integrantes";

export default function IntegranteDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pessoa = integrantes.find((p) => p.id === id);

  if (!pessoa) {
    return (
      <section className="max-w-3xl mx-auto px-4 py-10">
        <p>Integrante não encontrado.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 rounded bg-gray-200">Voltar</button>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl p-6 shadow">
        <img src={pessoa.img} alt={pessoa.nome} className="w-32 h-32 rounded-full object-cover mb-4" />
        <h2 className="text-2xl font-semibold">{pessoa.nome}</h2>
        <p className="text-gray-600">RM: {pessoa.rm}</p>
        <div className="mt-4 flex gap-3">
          <a href={pessoa.linkedin} target="_blank" rel="noreferrer" className="text-brand-blue underline">LinkedIn</a>
          <Link to="/integrantes" className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">Voltar para lista</Link>
        </div>
      </div>
    </section>
  );
}
