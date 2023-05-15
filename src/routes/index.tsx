import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImagen } from '~/components/imagen-back';


export default component$(() => {

  const pokemonId = useSignal(1);
  const backImagen = useSignal(false);
  const show = useSignal(false);
  const changePokemonId = $((value:number) => {
    if((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
  })
  return (
    <>
      <span class="text-4xl">Buscador</span>
      <span  class="text-5xl">{pokemonId}</span>
      <PokemonImagen id={pokemonId.value} isFront={backImagen.value} isShow={show.value}/>
      <div class ="mt-2">
        <button onClick$={() => changePokemonId(-1) } class="btn btn-indigo">Back</button>
        <button onClick$={() => changePokemonId(+1) } class="btn btn-purple">Next</button>
        <button  onClick$={() => backImagen.value = !backImagen.value} class="btn btn-gray">Back</button>
        <button  onClick$={() => show.value = !show.value} class="btn btn-red">show</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Gescorp',
  meta: [
    {
      name: 'description',
      content: 'index page',
    },
  ],
};
