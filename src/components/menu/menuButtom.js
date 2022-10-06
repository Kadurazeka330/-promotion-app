import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './menuMedia.css';

function MenuButtom () {
    return(

        <div>
              <Navbar  bg="light" expand="lg">
            <Container>
        <Navbar.Brand href="/">Быстрая раскрутка</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Instagram" id="basic-nav-dropdown">
            <NavDropdown.Item href="/InstagramSubscribers" > Подписчики</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  href="/InstagramLike"> Лайки </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/InstagramComments"> Комментарии </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/InstagramVideo">  Просмотры видео </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/InstagramHistory"> Просмотры историй (сторис) </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Telegram" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/TelegramSubscribers" > Подписчики на каналы</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/TelegramViews"> Просмотры </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/TelegramReaction"> Реакции </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Facebook" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/InstagramSubscribers" > Подписчики</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/FacebookSubscribers">  Подписчики на профиль </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/FacebookVoting" > Голосование </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/FacebookComments">  Комментарии </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Соцсети " id="basic-nav-dropdown">
                    <NavDropdown.Item href="/SpamOdnoklassniki" > Одноклассники </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/SpamVk"> Вконтакте </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Trafic" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/TraficSEO" > SEO и накрутка статистики</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/TraficWeb">  Посетители для сайтов </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/TraficGoogle" > Посетители из Google </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Інше" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#" > Продажа специализированого софта по автоматизации работы в ФБ</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#"> Площадка о продажи аккаунтов</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
          </Navbar>
        </div>
    )
}

export default MenuButtom;