import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';

import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { Container } from './styles';

import Sidebar from '../../components/Sidebar';
import MapIcon from '../../utils/MapIcon';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';

interface Position {
  latitude: number;
  longitude: number;
}

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState<Position>({
    latitude: 0,
    longitude: 0,
  });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [opening_hours_start, setOpeningHoursStart] = useState('');
  const [opening_hours_end, setOpeningHoursEnd] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setPosition({ latitude: event.latlng.lat, longitude: event.latlng.lng });
  }, []);

  useEffect(() => {
    setOpeningHours(`de ${opening_hours_start} às ${opening_hours_end}`);
  }, [opening_hours_start, opening_hours_end]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (images.length !== 0) {
        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('name', name);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('about', about);
        data.append('instructions', instructions);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(open_on_weekends));

        images.forEach(image => {
          data.append('images', image);
        });

        await api.post('orphanage', data);

        toast.success('Cadastro realizado com sucesso', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push('/app');
      } else {
        toast.error('Adicione fotos para o orfanato!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [
      about,
      history,
      images,
      instructions,
      name,
      open_on_weekends,
      opening_hours,
      position,
    ],
  );

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedImages = Array.from(event.target.files);

        setImages(selectedImages);

        const selectedImagesPreview = selectedImages.map(image => {
          return URL.createObjectURL(image);
        });

        setPreviewImages(selectedImagesPreview);
      }
    },
    [],
  );

  return (
    <Container>
      <Sidebar />
      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-4.1322968, -38.2368021]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={MapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map(image => (
                  <img key={image} src={image} alt={name} />
                ))}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input
                type="file"
                multiple
                id="image[]"
                onChange={handleSelectImages}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <div className="input-block-wrapper">
                <input
                  id="opening_hours"
                  value={opening_hours_start}
                  onChange={e => setOpeningHoursStart(e.target.value)}
                  type="time"
                />
                <input
                  id="opening_hours"
                  value={opening_hours_end}
                  onChange={e => setOpeningHoursEnd(e.target.value)}
                  type="time"
                />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  onClick={() => setOpenOnWeekends(true)}
                  className={open_on_weekends ? 'active' : ''}
                >
                  Sim
                </button>
                <button
                  type="button"
                  onClick={() => setOpenOnWeekends(false)}
                  className={open_on_weekends ? '' : 'active'}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </Container>
  );
}
