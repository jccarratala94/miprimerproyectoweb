from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Configurar Selenium
driver = webdriver.Chrome()

try:
    # Cargar la página
    driver.get("http://127.0.0.1:5500/templates/index.html")  # Cambia según tu ruta

    # Completar campos del formulario
    driver.find_element(By.ID, "nombre").send_keys("Juan Cruz")
    driver.find_element(By.ID, "email").send_keys("juancruz@example.com")
    driver.find_element(By.ID, "mensaje").send_keys("Hola, esta es una prueba con Selenium.")

    # Enviar formulario
    driver.find_element(By.ID, "enviar").click()

    # Esperar para verificar el mensaje de éxito
    time.sleep(2)
    mensaje_exito = driver.find_element(By.ID, "mensaje-exito")
    assert mensaje_exito.is_displayed()
    assert "¡Gracias por tu mensaje!" in mensaje_exito.text

finally:
    # Cerrar el navegador
    driver.quit()
