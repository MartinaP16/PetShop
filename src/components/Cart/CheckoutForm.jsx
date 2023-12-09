import React, { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { decreaseStock, saveOrder } from '../asyncMock'
import {Link}  from 'react-router-dom'
import './CheckoutForm.css'

const CheckoutForm = () => {
    const { cart, clearCart} = useContext(CartContext);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
    });
    const [orderId, setOrderId] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validar el campo correspondiente al cambiar su valor
        switch (name) {
            case 'firstName':
            setErrors({ ...errors, [name]: validateFirstName(value) });
            break;
            case 'lastName':
            setErrors({ ...errors, [name]: validateLastName(value) });
            break;
            case 'email':
            setErrors({ ...errors, [name]: validateEmail(value) });
            break;
            case 'creditCardNumber':
            setErrors({ ...errors, [name]: validateCreditCardNumber(value) });
            break;
            case 'expirationDate':
            setErrors({ ...errors, [name]: validateExpirationDate(value) });
            break;
            case 'cvv':
            setErrors({ ...errors, [name]: validateCVV(value) });
            break;
            default:
            break;
        }
    };
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
        if (cart && cart.length > 0) {
            for (const item of cart) {
              await decreaseStock(item.id, item.quantity);
            }
    
            const orderData = {
            Nombre: formData.firstName,
            Apellido: formData.lastName,
            Email: formData.email,
            Products: cart, 
            };
    
            try {
                setOrderId(await saveOrder(orderData));
    
                console.log('Pedido guardado con éxito. ID del pedido:', orderId);
            } catch (error) {
                console.error('Error al guardar el pedido en Firebase:', error);
            }
    
            clearCart();
        }
      } else {
        if(errors.firstName!==''){

        }
      }
    };
    const validateForm = () => {
        // Validar todos los campos
        const newErrors = {
          firstName: validateFirstName(formData.firstName),
          lastName: validateLastName(formData.lastName),
          email: validateEmail(formData.email),
          creditCardNumber: validateCreditCardNumber(formData.creditCardNumber),
          expirationDate: validateExpirationDate(formData.expirationDate),
          cvv: validateCVV(formData.cvv),
        };
    
        // Actualizar el estado de los errores
        setErrors(newErrors);
    
        // Devolver true si no hay errores, false de lo contrario
        return !Object.values(newErrors).some((error) => error !== '');
    };
    // Funciones de validación
    const validateFirstName = (name) => {
        if (!name.trim()) {
        return 'El nombre es obligatorio';
        }
        if(/\d/.test(name)){
            return 'El nombre no debe contener numeros';
        }
        return '';
    };
    const validateLastName = (lastName) => {
        if (!lastName.trim()) {
        return 'El apellido es obligatorio';
        }
        if(/\d/.test(lastName)){
            return 'El nombre no debe contener numeros';
        }
        return '';
    };
    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailPattern.test(email)) {
        return 'Ingrese un correo electrónico válido';
        }
        return '';
    };
    const validateCreditCardNumber = (creditCardNumber) => {
        if (!creditCardNumber.trim()) {
            return 'Debe llenar con una tarjeta';
        }
        
        const numeroTarjetaLimpio = creditCardNumber.replace(/\s/g, '');

        // Verificar si el número de tarjeta contiene solo dígitos y tiene la longitud esperada
        const esNumerico = /^\d+$/.test(numeroTarjetaLimpio);
        if(!esNumerico){
            return 'Solamente deben haber numeros';
        }
        if(!(numeroTarjetaLimpio.length === 15 || numeroTarjetaLimpio.length === 16)){
            return 'La longitud del numero de la tarjeta es inválido'
        }
        return '';
    };
    const validateExpirationDate = (expirationDate) => {
        if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expirationDate)){
            return 'Formato inválido (MM/AA)'
        }
        return '';
    };
    const validateCVV = (cvv) => {
        if (!cvv.trim()) {
            return 'Debe llenar con el CVV';
        }
        
        const cvvLimpio = cvv.replace(/\s/g, '');

        // Verificar si el número de tarjeta contiene solo dígitos y tiene la longitud esperada
        const esNumerico = /^\d+$/.test(cvvLimpio);
        if(!esNumerico){
            return 'Solamente deben haber numeros';
        }
        if(!(cvvLimpio.length === 3 || cvvLimpio.length === 4)){
            return 'La longitud del numero del CVV es inválido'
        }
        return '';
    };

  return (
    <form onSubmit={handleSubmit}>
      {cart && cart.length === 0 ? (
          <div className='compraExitosa'>
            <h1>Compra exitosa!</h1>                
                    <h2>Código de compra: {orderId}</h2>
                <Link to='/'>                    
                    <button>Volver al Inicio</button>
                </Link>
        </div>
      ):(
        <div>
            <h2>Checkout</h2>
            <div className='container-checkout'>
            <div className='container-checkout-products'>
            <p className='total-price'>Total: ${cart.reduce((total,item)=> total + (item.Precio*item.quantity), 0)}</p>
            {cart &&
                                cart.map((item) => (
                                <article className="checkout-product">    
                                    <div key={item.id} className="product-item-checkout">
                                        <picture>
                                            <img src={item.Imagen} alt={item.Nombre}></img >
                                        </picture>  
                                        <div className='product-description'>
                                            <p>{item.Nombre}</p>
                                            <p>Cantidad: {item.quantity}</p>    
                                        </div>
                                        <div className='product-price'>
                                            <p>${item.Precio}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
            </div>
            <div className='container-checkout-payment'>
            <div className='label payment-fullname'>
                <label className='personalInfo'>
                    Nombre:
                        <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        />
                        {errors.firstName !== ''?(
                            <div>*{errors.firstName}</div>
                        ):(
                            <div></div>
                        )}
                </label>
                <label className='personalInfo'>
                Apellido:
                <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                    />
                    {errors.lastName !== ''?(
                    <div>*{errors.lastName}</div>
                ):(
                    <div></div>
                )}
                </label>
            </div>
            <div className='label'>
                <label className='personalInfo'>
                    Correo electrónico:
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                    {errors.email !== ''?(
                        <div>*{errors.email}</div>
                    ):(
                        <div></div>
                    )}
                </label>
            </div>

            <div className='label'>
                <label className='creditCardNumber'>
                    Número de tarjeta:
                    <input
                    type="text"
                    name="creditCardNumber"
                    placeholder="1234 1234 1234 1234"
                    value={formData.creditCardNumber}
                    onChange={handleInputChange}
                    />
                    {errors.creditCardNumber !== ''?(
                        <div>*{errors.creditCardNumber}</div>
                    ):(
                        <div></div>
                    )}
                </label>
                <label className='expirationDate'>
                    Fecha de vencimiento:
                    <input
                    type="text"
                    name="expirationDate"
                    placeholder="MM/AA"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                    />
                    {errors.expirationDate !== ''?(
                        <div>*{errors.expirationDate}</div>
                    ):(
                        <div></div>
                    )}
                </label>
                <label className='cvv'>
                    CVV:
                    <input
                    type="text"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    />
                    {errors.cvv !== ''?(
                        <div>*{errors.cvv}</div>
                    ):(
                        <div></div>
                    )}
                </label>
            </div>
            <button type="submit">Realizar compra</button>
            </div>
            </div>
        </div>
      )}
    </form>

  );
};

export default CheckoutForm;
