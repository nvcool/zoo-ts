import lama from "@assets/zoo/zoo-lama.jpg";
import sova from "@assets/zoo/zoo-sova.png";
import lisa from "@assets/zoo/zoo-lisa.jpg";
import duck from "@assets/zoo/zoo-duck.jpg";
import belka from "@assets/zoo/zoo-belka.jpg";
import huskie from "@assets/zoo/zoo-huskie.jpg";
import monkey from "@assets/zoo/zoo-monkey.jpg";
import rus from "@assets/zoo/zoo-rus.jpg";
import { Support } from "@/components/Support";

export const Zoo = () => {
  return (
    <div className="sm:bg-none sm:px-0 px-4 md:bg-none lg:bg-background-zoo  bg-cover bg-no-repeat pt-[125px] sm:pt-[228px] overflow-hidden ">
      <section className="container mb-[100px]">
        <h1 className="text-[64px] text-orange text-center mb-14 font-shantell">
          Зоопарк на Лампушке
        </h1>
        <p className="mb-4 text-[32px] font-medium leading-[140%]">
          В реликтовом сосновом бору на берегу родникового <br /> озера Лампушка
          расположен{" "}
          <strong className=" ">
            {" "}
            крупнейший частный лицензированный зоопарк Санкт-Петербурга, <br />
            Ленинградской области и всего Северо-Западного Федерального округа
            России.
          </strong>
        </p>
        <p className="mb-8 text-[32px] font-medium leading-[140%]">
          В нашей коллекции <strong className="">более 400 животных</strong>,
          которые <br />
          относятся к 125 видам. Многие из наших питомцев внесены <br /> в{" "}
          <strong className=""> Красную книгу России и мира.</strong>{" "}
          Большинство животных <br /> в нашем зоопарке выращены сотрудниками с
          малого возраста. Каждый зверь имеет собственное имя и обладает
          уникальной историей.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="flex sm:h-full gap-8 justify-between h-[228px] overflow-hidden">
            <img
              className="rounded-[90px] w-full h-full object-cover"
              src={lama}
              alt=""
            />
            <img
              className="rounded-s-[160px] w-full h-full object-cover sm:hidden"
              src={sova}
              alt=""
            />
          </div>
          <div className=" grid content-between">
            <div className=" grid gap-6 text-[18px]">
              <p>
                В апреле 2024 года «Зоопарк на Лампушке» стал, пожалуй,{" "}
                <strong>
                  самым социально ориентированным частным зоопарком России.
                </strong>
              </p>
              <p>
                Зоосад передан в управление автономной некоммерческой
                организации по сохранению природных и семейных ценностей
                <strong>«Лампушка – Заповедный мир».</strong>
              </p>
              <p>
                Это первый в нашей стране случай, когда зоопарк управляется
                некоммерческой организацией. Данному событию предшествовал{" "}
                <strong>длинный и непростой путь.</strong>
              </p>
            </div>
            <img
              className="rounded-s-[160px] sm:block hidden"
              src={sova}
              alt=""
            />
          </div>
        </div>
        <p className="mb-4 text-[32px] font-medium leading-[140%]">
          Появление «Зоопарка на Лампушке» можно назвать <br />
          <strong>случайным</strong>, а события, которые этому предшествовали, -{" "}
          <strong>удивительными.</strong>
        </p>
        <p className="text-[32px] font-medium leading-[140%] mb-6">
          Летом 2016 года сотрудники базы отдыха «Шишки на Лампушке» обнаружили
          завязанный мешок, в котором находились два крошечных лисенка. Их мать,
          скорее всего, погибла, а малышей подкинули нам.
        </p>
        <img className="rounded-[90px] mb-6" src={lisa} alt="" />
        <p className="mb-4 text-[32px] font-medium leading-[140%]">
          Выжить в дикой природе у лисят не было ни единого шанса, поэтому{" "}
          <strong>Ася и Вася</strong>, так назвали маленьких лисиц,{" "}
          <strong>
            стали <br /> первыми обитателями «Зоопарка на Лампушке»
          </strong>
          , когда самого зоопарка еще не было.
        </p>
        <p className="mb-4 text-[32px] font-medium leading-[140%]">
          Основатель базы отдыха «Шишки на Лампушке» и нашего зоопарка Вячеслав
          Александрович Ананских лично выкармливал подкидышей.
        </p>
        <p className=" text-[32px] font-medium leading-[140%]">
          Наши первые постояльцы росли, набирались сил, а однажды им удалось
          сбежать из вольера. Спустя несколько дней работники обнаружили
          исхудавших Асю и Васю на привычном месте – лисята вернулись к
          выкормившим их людям.
        </p>
      </section>
      <section className="container mb-[100px]">
        <div className=" flex justify-between mb-8">
          <div className="text-[18px] leading-[140%] w-[566px]">
            <p className=" mb-6">
              Посетители нашего зоопарка могут не только{" "}
              <strong> посмотреть на экзотических зверей и птиц</strong>,
              представителей фауны разных регионов России и одомашненных
              животных, но и{" "}
              <strong>
                {" "}
                покормить специальным кормом, погладить, отправиться на прогулку
              </strong>{" "}
              по сосновому бору и, конечно же,{" "}
              <strong> сфотографироваться.</strong>
            </p>
            <p>
              Зоопарк проводит{" "}
              <strong>индивидуальные и групповые экскурсии</strong>, занятия с
              детьми по биологическому разнообразию мира, предоставляет животных
              для общения с детьми в рамках социальных проектов.
            </p>
          </div>
          <div className="flex gap-8">
            <img className="h-[174px] rounded-[18px]" src={duck} alt="" />
            <img className="rounded-[30px]" src={belka} alt="" />
          </div>
        </div>
        <img className="rounded-[60px] mb-14" src={huskie} alt="" />
        <span className="text-[32px] font-medium leading-[140%]">
          Наши питомцы <strong> никого не оставят равнодушными!</strong>
        </span>
      </section>
      <section className="container mb-[100px]">
        <h2 className="text-[64px] text-orange mb-14">Услуги зоопарка</h2>
        <ul className="grid gap-8">
          <li className="bg-white py-8 px-8 rounded-[30px] gap-6 grid">
            <h3 className="text-[32px] font-medium">Групповые экскурсии </h3>
            <p className="text-[18px]">
              Для гостей Заповедного мира «Шишки на Лампушке» мы предлагаем
              увлекательные <br /> обзорные групповые и индивидуальные экскурсии
              в зоопарк. Вас ждёт рассказ <br /> о представленных видах животных
              и особенностях поведения конкретных питомцев <br /> «Зоопарка на
              Лампушке». В присутствии хранителя (кипера) животные раскрываются{" "}
              <br />
              совершенно с другой стороны!
            </p>
            <div className="grid gap-4 gap-x-4 gap-y-2 md:grid-cols-[auto,1fr] md:gap-y-5">
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Длительность:
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    flex-1">
                1 час
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Стоимость:{" "}
              </p>
              <div className="grid flex-1 gap-4">
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Группа от 1 до 15 человек 5000 руб.+ оплата входных билетов в
                  зоопарк
                </p>
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Группа от 16 до 23 человек 8000 руб. + оплата входных билетов
                  в зоопарк.
                </p>
              </div>
            </div>
            <p className="text-[18px]">
              Индивидуальные экскурсии для маломобильных граждан и для групп
              больше 20 человек <br /> оговариваются отдельно. Экскурсии с
              гидом-экскурсоводом бронируются заранее <br /> по телефону{" "}
              <strong>+7 (812) 725-00-05</strong> или по электронной почте
              <strong>Booking.lampushki@gmail.com</strong> <br /> Режим
              предоставления данной услуги может изменяться по усмотрению
              Администрации.
            </p>
          </li>
          <li className="bg-white py-8 px-8 rounded-[30px] gap-6 grid">
            <h3 className="text-[32px] font-medium">Прогулки с животными </h3>
            <p className="text-[18px]">Ежедневно с 10.00 до 19.00</p>
            <p className="text-[18px]">
              Вы можете погулять по территории базы отдыха с одним из наших
              питомцев. В восторге <br /> от такого близкого общения будут и
              дети, и взрослые. А как наши питомцы любят гулять! <br /> Активные
              хаски и весёлые самоеды сопроводят вас по заповедной территории
              базы отдыха <br /> «Шишки на Лампушке» в любое время года.
            </p>
            <div className="grid gap-4 gap-x-4 gap-y-2 md:grid-cols-[auto,1fr] md:gap-y-5">
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Длительность:
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    flex-1">
                25 минут
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Стоимость:{" "}
              </p>
              <div className="grid flex-1 gap-4">
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Прогулка по сосновому лесу к озеру с Сибирской хаски, на ваш
                  выбор - 600 руб.
                </p>
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Прогулка по сосновому лесу с Самоедской собакой, на Ваш выбор
                  - 700 руб.
                </p>
              </div>
            </div>
            <p className="text-[18px]">
              Режим предоставления данной услуги может изменяться по усмотрению
              Администрации.
            </p>
          </li>
          <li className="bg-white py-8 px-8 rounded-[30px] gap-6 grid">
            <h3 className="text-[32px] font-medium">Фотосессии </h3>
            <p className="text-[18px]">
              Уникальные селфи, удивительные эмоции и 100% искренность на
              фотографиях! <br /> Такое возможно только с животными. На
              территории базы отдыха “Шишки на Лампушке” вы <br /> можете
              сделать фото на память с нашими питомцами и пообщаться с ними
              внутри вольера. <br /> Также доступно фото с попугаями ара и
              какаду, фото с лемурами и другими животными. <br /> Актуальную
              информацию уточняйте по телефону.
            </p>
            <div className="grid gap-4 gap-x-4 gap-y-2 md:grid-cols-[auto,1fr] md:gap-y-5">
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Телефон для связи:
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    flex-1">
                +7 (905) 265-00-03
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Длительность:
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    flex-1">
                10 минут
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Стоимость:{" "}
              </p>
              <div className="grid flex-1 gap-4">
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Фото в вольере с одной из альпак на выбор - 500 руб.
                </p>
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Фото в вольере с одной из собак - 500 руб.
                </p>
              </div>
            </div>
            <p className="text-[18px]">
              Режим предоставления данной услуги может изменяться по усмотрению
              Администрации.
            </p>
          </li>
          <li className="bg-white py-8 px-8 rounded-[30px] gap-6 grid">
            <h3 className="text-[32px] font-medium">Лектории </h3>
            <p className="text-[18px]">
              Подробную информацию можно запросить по почте{" "}
              <strong> nko_lampushka@mail.ru</strong>
            </p>
            <div className="grid gap-4 gap-x-4 gap-y-2 md:grid-cols-[auto,1fr] md:gap-y-5">
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Стоимость:{" "}
              </p>
              <div className="grid flex-1 gap-4">
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Рассчитывается индивидуально
                </p>
              </div>
            </div>
          </li>
          <li className="bg-white py-8 px-8 rounded-[30px] gap-6 grid">
            <h3 className="text-[32px] font-medium">
              Ваше мероприятие в зоопарке{" "}
            </h3>
            <p className="text-[18px]">
              День рождения ребенка, корпоратив, свадьба и многое другое.
              Оставить заявку можно по номеру ниже с указанием праздника и
              примерного количества и возраста гостей.
            </p>
            <div className="grid gap-4 gap-x-4 gap-y-2 md:grid-cols-[auto,1fr] md:gap-y-5">
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Телефон для бронирования:
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    flex-1">
                +7 (905) 265-00-03
              </p>
              <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    text-orange">
                Стоимость:{" "}
              </p>
              <div className="grid flex-1 gap-4">
                <p className="text text-base leading-[19px] sm:text-lg sm:leading-[140%]    ">
                  Рассчитывается индивидуально
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="container mb-[100px]">
        <p className="text-[32px] text-center mb-14">
          Мы хотим познакомить максимальное количество жителей <br /> России,
          Санкт-Петербурга и Ленинградской области <br /> с удивительным,
          загадочным и прекрасным миром дикой <br /> природы. Мы{" "}
          <strong> создаем место притяжения</strong>, где комфортно <br />{" "}
          чувствуют себя и человек, и животные.
        </p>
        <img className="rounded-t-[342px]" src={monkey} alt="" />
      </section>
      <section className="container mb-[100px]">
        <div className=" text-[32px] font-medium leading-[140%] text-center bg-white py-16 rounded-[30px]">
          <p>
            <span className="text-orange">Время работы зоопарка:</span>{" "}
            Ежедневно с 10:00 до 19:00
          </p>
          <p>
            <span className="text-orange">Телефон для связи:</span> +7 (905)
            265-00-03
          </p>
        </div>
      </section>
      <section className="container mb-[100px]">
        <h3 className="text-[64px] text-orange font-shantell mb-14">
          Опека над животными
        </h3>
        <div className="flex gap-8">
          <img className="rounded-[90px]" src={rus} alt="" />
          <div className=" grid gap-4 text-[18px] leading-[140%] h-fit">
            <p>
              <strong>Любой человек или компания</strong> может стать другом
              нашего зоопарка и его обитателей. Мы всегда
              <br />
              <strong> открыты для предложений</strong>. Кстати, заключение
              договора опеки над животным – прекрасное имиджевое и репутационное
              приобретение. <br /> Ведь, как говорил Шопенгауэр: «тот, кто
              жесток <br /> к животным, не может быть хорошим человеком». Наши
              друзья не такие, абсолютно точно!
            </p>
            <p>
              Внести небольшую лепту<strong> под силу каждому</strong>. <br />{" "}
              Вы можете заключить договор опеки над животным. <br /> На вольере
              опекаемого будет установлена табличка
              <br /> с информацией о компании или человеке, которые помогают
              животному.
            </p>
            <p>
              Став другом нашего зоопарка, вы совершите добрый поступок и
              окажете ощутимую поддержку его обитателям. А также своим примером
              покажите, <br /> что сегодня есть люди, которым
              <strong>
                {" "}
                небезразлична <br /> судьба братьев наших меньших.
              </strong>
            </p>
          </div>
        </div>
      </section>
      <Support />
    </div>
  );
};
