import '../styles/main.scss'

const focusableList = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'


class Modal{
    contructor(id){
        this.name = id
        this.id = id;
        this.modal = document.getElementById(id)
    }
    setThisModal(value) {
        return this.id = value
    }
 
    showModal() {
        this.activeElement = document.activeElement
        this.modal.setAttribute('aria-hidden', 'false')
        this.modal.classList.add('is-open')
        this.setFocusToFirstNode()
        this.attachCloseListener()
      }
    attachCloseListener(){
        this.querySelectorAll(".close-btn").forEach((closeBtn)=>{
            closeBtn.addEventListener('click', (event)=>{
                closeModal();
                event.preventDefault();
            })
        })
    }
    closeModal() {
        this.modal.setAttribute('aria-hidden', true)
        this.modal.removeAttribute('aria-modal')
        this.activeElement.focus()
        this.querySelector('.close_modal').removeEventListener('click', closeModal);
      }   
}

const modals = [...document.querySelectorAll("[data-modal]")];
modals.forEach((modal) => new Modal(modal.dataset['modal'])) 

const triggers = [...document.querySelectorAll("[data-trigger]")];

triggers.forEach((trigger) => {
   
    let targetModalId = trigger.dataset['trigger']

    trigger.addEventListener('click', (event) => {
        
    this.targetModalId.showModal()
      
      event.preventDefault();
    })
  }); 
