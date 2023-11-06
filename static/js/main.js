let mdContent = `MVP

* basic interface
* Easy to use

# Question
1. What is your project name
2. Description
3. What features you expect
   1. Sub ideas
4. Keywords related to it
5. UVP(unique value proposition)
6. >> get inspiration (behance, dribble)

7. Technologies used
8. ETA's Estimated time of accomplishment


Resources:
- realtimecolors
- undraw
- flaticon
- remixicon
- behance
- dribbble

## Names:
heyIdeas
Brain Strommers
brideas

Color
https://vercel.com/vercel-product-tour`



document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  document.querySelector('#popup').classList.remove('hidden')

  // Values
  let projectName = event.target.elements['projectName'].value
  let description = event.target.elements['description'].value
  let keywords = event.target.elements['keywords'].value
  let uvp = event.target.elements['uvp'].value
  let technologies = event.target.elements['technologies'].value
  let improve = event.target.elements['improve'].value
  let eta = event.target.elements['eta'].value
  console.log(projectName, description, keywords, uvp, technologies, improve, eta)

  const final = finalMD(projectName, description, keywords, uvp, technologies, eta)

  document.getElementById('popupText').value = final


  
})

document.querySelector('#copyBtn').addEventListener('click', (event)=>{
  var copyText = document.getElementById("popupText");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
})

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
}

// Keywords input
const keywordsInput = document.querySelector('#keywords_input')

keywordsInput.addEventListener('input', (event) => {
  console.log(typeof (event.target.value))
  const a = event.target.value
  console.log(a.slice(-1))

  if (a.slice(-1) == ',') {
    addNewKeyword(a.slice(0, -1), "generated_keywords", "bg-slate-400")
    event.target.value = ''
  }
})

// Technologies input
const techInput = document.querySelector('#tech_input')

techInput.addEventListener('input', (event) => {
  console.log(typeof (event.target.value))
  const a = event.target.value
  console.log(a.slice(-1))

  if (a.slice(-1) == ',') {
    addNewKeyword(a.slice(0, -1), "generated_tech", "bg-sky-300")
    event.target.value = ''
  }
})


// Close copy final pop
document.getElementById('close_pop').addEventListener('click', (event) => {
  // document.querySelector('.final_results').style.display = 'none'
  document.querySelector('#popup').classList.add('hidden')

})


// submiting :
document.querySelector("#submitBtn").addEventListener('click', (event) => {

})


// Take input


function addNewKeyword(keyword, whereToInsert, bgClr) {
  const newKeyword = document.createElement('li')

  newKeyword.textContent = ('#' + keyword)

  newKeyword.className = (`${bgClr} px-1 rounded-sm`)

  document.querySelector('.' + whereToInsert).appendChild(newKeyword)

}

function finalMD(projectName, description, features, keywords, uvp, technologies, eta) {
  let final = `
# ${projectName}

## What is your project name
${projectName}
## Description

${description}

## Features
${features}

## Keywords related to it
${keywords}

## UVP(unique value proposition)
${uvp}

## Technologies used
${technologies}

## ETA's Estimated time of accomplishment
${eta}

## Inspirations
 * get inspiration from (behance, dribble)
 * SVG's - www.flaticon.com
 * Illustrator SVG's - www.undraw.com
 * icons - www.remixicon.com
`
  return final
}