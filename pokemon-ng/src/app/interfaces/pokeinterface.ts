export interface Pokeinterface {


  id: number,
  name: string,
  sprites: {
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string

  },
  stats: [
    {
      //HP
      base_stat: number,
    },
    {
      //ATTACK
      base_stat: number,

    },
    {
      //DEFENSE
      base_stat: number,
    },
    {
      //SPECIAL ATTACK
      base_stat: number,
    },
    //SPECIAL DEFENCE
    {
      base_stat: number,
    },
    //SPEED
    {
      base_stat: number,
    },
  ],
  types: [
    {
      slot: number,
      type: {
        name: string,
      }
    },
    {
      slot: number,
      type: {
        name: string,
      }
    }
  ],

}
