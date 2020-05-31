import React from 'react';
import '../assets/styles/components/BadgesList.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const BadgesListItem = ({ badge }) => {
  const { avatarUrl, nickName, lastName, category, type, description } = badge
  return (
    <div className='BadgesListItem'>
      <img
        className='BadgesListItem__avatar'
        src={avatarUrl}
        alt={`${nickName} ${lastName}`}
      />

      <div className='BadgeText'>
        <strong>
          {nickName}
          {' '}
          {lastName}
        </strong>
        <br />
        Categoría:
        {' '}
        {'  '}
        {category}
        ,
        {'  '}
        {type}
        <br />
        {description}
      </div>
    </div>
  );
}

const BadgesList = (props) => {
  const { badges } = props
  const [categoria, setCategoria] = React.useState('')
  const [tipo, setTipo] = React.useState('')

  const filterBadges = (badges) => {
    return badges.filter((badge) => {
      if (badge.category.length === 0) {
        return false
      }
      return (
        badge.category
          .toLowerCase()
          .includes(
            categoria.toLowerCase(),
          )
      ) &&
      badge.type
        .toLowerCase()
        .includes(
          tipo.toLocaleLowerCase(),
        )
    })
  }
  const badgesFiltrados = filterBadges(badges)

  if (badgesFiltrados.length === 0) {
    return (
      <div>
        <div className='BadgesList'>
          <p>Filtrar por categoría</p>
          <select
            value={categoria}
            className='seleccion'
            name='category'
            onChange={(e) => {
              setCategoria(e.target.value)
            }}
          >
            <option defaultValue />
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>

          <p>o por tipo de juego</p>
          <select
            value={tipo}
            className='seleccion-type'
            name='category'
            onChange={(e) => {
              setTipo(e.target.value)
            }}
          >
            <option defaultValue />
            <option>singles</option>
            <option>dobles</option>
          </select>
        </div>
        <h2>No se encontraron jugadores</h2>
      </div>
    )
  }

  return (
    <div className='BadgesList'>
      <div className='form-group'>
        <label className='letters' htmlFor='category'>
          Filtrar por categoría
          <select
            value={categoria}
            className='seleccion'
            id='category'
            onChange={(e) => {
              setCategoria(e.target.value)
            }}
          >
            <option defaultValue />
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
        </label>

        <label className='letters' htmlFor='type'>
          o por tipo de juego
          <select
            value={tipo}
            className='seleccion-type'
            id='type'
            onChange={(e) => {
              setTipo(e.target.value)
            }}
          >
            <option defaultValue />
            <option>singles</option>
            <option>dobles</option>
          </select>
        </label>
      </div>

      <ul className='lista'>
        {badgesFiltrados.map((badge) => {
          const { id } = badge
          return (
            <li key={id}>
              <Link className='itemBadge' to={`badges/${id}/info`}>
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    badges: state.badges,
  }
}

export default connect(mapStateToProps, null)(BadgesList)
