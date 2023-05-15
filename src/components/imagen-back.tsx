import { component$, useSignal, useTask$ } from "@builder.io/qwik";


interface Props {
    id: number;
    size?: number;
    isFront: boolean;
    isShow: boolean;
}

export const PokemonImagen = component$(({ id, size=200, isFront=false, isShow=true}: Props) => {
    
    const backImagen = isFront ? '' : 'back/';

    const imageLoad = useSignal(false);

    useTask$(({track}) => {
        track(() => id);
        imageLoad.value = false;
    });

    return (
        <div class="flex items-center justify-center" style={{ height: `${ size }px`, width: `${ size }px`}}>
            { !imageLoad.value && <span>Cargando...</span> }            
            <img height={ `${ size }px`} width={`${ size }px`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${backImagen}${id}.png`}
                alt="Img pokedesk"
                onLoad$={ () => {
                    setTimeout(() => {
                    imageLoad.value = true;
                }, 500);
                }}
                class={{
                    'hidden': !imageLoad.value,
                    'brightness-0': isShow,
                }}
            />
        </div>     
    )
});