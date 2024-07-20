import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.9127128089617!2d72.85750192605632!3d21.195626180495765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04faee0b86bdf%3A0x29acf9cb53616866!2zRC4gUi4g4KS14KSw4KWN4KSy4KWN4KShLCDgpK3gpL7gpJfgpY3gpK_gpYvgpKbgpK8g4KSH4KSC4KSh4KS44KWN4KSf4KWN4KSw4KS_4KSv4KSyIOCkj-CkuOCljeCkn-Clh-Cknywg4KSq4KSw4KWN4KS14KSkIOCkquCkvuCkn-Ckv-Ckr-Ckviwg4KS44KWC4KSw4KSkLCDgpJfgpYHgpJzgpLDgpL7gpKQgMzk1MTAx!5e0!3m2!1shi!2sin!4v1720274662239!5m2!1shi!2sin"
        width="900"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mjkbvjpd"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              reuired
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
