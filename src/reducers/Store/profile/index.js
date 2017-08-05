import { targetAge, formSections, pageTitle } from './form-reducer.js';


const profile = () => {
  return [
    { targetAge: targetAge },
    { title : pageTitle },
    { sections: formSections }
  ]
}

export default profile
