export interface NewBat {
  Interno: String;
  Marca: String;
  Serie: String;
  Modelo: String;
  Voltaje: String;
  Amper: String;
  TipoDePuente: String;
  TipoDeConector: String;
  SistemaDeAgua: String;
  MedidasCable: String;
  AñoDeIngreso: Date;
  Ubicacion: String;
  Estado: String;
  Tapa: Boolean;
  Cable: Boolean;
  Ficha: Boolean;
  Terminal: Boolean;
  Puente: Boolean;
  Limpieza: Boolean;
  AguaDest: Boolean;
  Turno: Array<String>;
  Fecha: Date;
  Novedades: String;
  Send: Boolean;
  user: String;
  Tipo: String;
}
