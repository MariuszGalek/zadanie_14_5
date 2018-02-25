var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {className: 'contactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Imię',
          defaultValue: this.props.contact.firstName,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Nazwisko',
          defaultValue: this.props.contact.lastName,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          defaultValue: this.props.contact.email,
        }),
        React.createElement('button', {type: 'submit'}, "Dodaj kontakt")
      )
    )
  },
})