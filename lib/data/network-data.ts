// Datos generados directamente desde:
// - HOJA 2: Comparativo Planes PAC Salud Total - HOJA 2 Comparativo REDES DE ATENCIÓN.csv

export interface FlatNetworkProvider {
  id: string
  city: string
  serviceType: string
  service: string
  name: string
  esencial: boolean
  preferente: boolean
  elite: boolean
}

export interface NetworkStats {
  institutionsByCity: Record<string, number>
  recordsByCity: Record<string, number>
}

export interface NetworkNote {
  serviceName: string
  note: string
  requiresValidation?: boolean
}

const RAW_NETWORK_DATA = String.raw`
ibague-77-atencion-domiciliaria-consulta-medica-domiciliaria-instituto-medico-integral-colombiano-ips	Ibagué	ATENCIÓN DOMICILIARIA	CONSULTA MÉDICA DOMICILIARIA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	100
ibague-77-atencion-domiciliaria-consulta-medica-domiciliaria-samid-sas	Ibagué	ATENCIÓN DOMICILIARIA	CONSULTA MÉDICA DOMICILIARIA	SAMID SAS	111
ibague-79-atencion-domiciliaria-terapia-fisica-domiciliaria-instituto-medico-integral-colombiano-ips	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA FÍSICA DOMICILIARIA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	100
ibague-80-atencion-domiciliaria-terapia-fisica-domiciliaria-promover-sas	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA FÍSICA DOMICILIARIA	PROMOVER SAS	100
ibague-79-atencion-domiciliaria-terapia-fisica-domiciliaria-samid-sas	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA FÍSICA DOMICILIARIA	SAMID SAS	111
ibague-82-atencion-domiciliaria-terapia-respiratoria-domiciliaria-instituto-medico-integral-colombiano-ips	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA RESPIRATORIA DOMICILIARIA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	100
ibague-83-atencion-domiciliaria-terapia-respiratoria-domiciliaria-promover-sas	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA RESPIRATORIA DOMICILIARIA	PROMOVER SAS	100
ibague-82-atencion-domiciliaria-terapia-respiratoria-domiciliaria-samid-sas	Ibagué	ATENCIÓN DOMICILIARIA	TERAPIA RESPIRATORIA DOMICILIARIA	SAMID SAS	111
ibague-85-ayudas-diagnosticas-colonoscopia-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	COLONOSCOPIA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-86-ayudas-diagnosticas-ecocardiograma-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-87-ayudas-diagnosticas-ecocardiograma-instituto-medico-integral-colombiano-ips	Ibagué	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	011
ibague-88-ayudas-diagnosticas-ecografia-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-89-ayudas-diagnosticas-ecografia-idime-ibague	Ibagué	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	IDIME IBAGUE	011
ibague-90-ayudas-diagnosticas-ecografia-inst-ultratecnologia-medica-sas-cadiz	Ibagué	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	INST ULTRATECNOLOGIA MEDICA SAS CADIZ	011
ibague-91-ayudas-diagnosticas-electrocardiograma-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-92-ayudas-diagnosticas-electrocardiograma-instituto-medico-integral-colombiano-ips	Ibagué	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	011
ibague-93-ayudas-diagnosticas-electroencefalograma-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ELECTROENCEFALOGRAMA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-94-ayudas-diagnosticas-electromiografia-y-neuroconduccion-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ELECTROMIOGRAFÍA Y NEUROCONDUCCIÓN	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-95-ayudas-diagnosticas-endoscopia-digestiva-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ENDOSCOPIA DIGESTIVA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-96-ayudas-diagnosticas-escanografia-tac-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-97-ayudas-diagnosticas-escanografia-tac-idime-ibague	Ibagué	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	IDIME IBAGUE	011
ibague-98-ayudas-diagnosticas-escanografia-tac-inst-ultratecnologia-medica-sas-cadiz	Ibagué	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	INST ULTRATECNOLOGIA MEDICA SAS CADIZ	011
ibague-99-ayudas-diagnosticas-mamografia-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-100-ayudas-diagnosticas-mamografia-inst-ultratecnologia-medica-sas-cadiz	Ibagué	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	INST ULTRATECNOLOGIA MEDICA SAS CADIZ	011
ibague-101-ayudas-diagnosticas-medicina-nuclear-centro-de-medicina-nuclear	Ibagué	AYUDAS DIAGNÓSTICAS	MEDICINA NUCLEAR	CENTRO DE MEDICINA NUCLEAR	011
ibague-102-ayudas-diagnosticas-pruebas-oftalmologicas-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-103-ayudas-diagnosticas-pruebas-vasculares-perifericas-no-invasivas-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	PRUEBAS VASCULARES PERIFÉRICAS NO INVASIVAS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-104-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-105-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-idime-ibague	Ibagué	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	IDIME IBAGUE	011
ibague-106-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-inst-ultratecnologia-medica-sas-cadiz	Ibagué	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	INST ULTRATECNOLOGIA MEDICA SAS CADIZ	011
ibague-107-ayudas-diagnosticas-resonancia-magnetica-ctro-integral-pac-medicadiz-sas	Ibagué	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-108-ayudas-diagnosticas-resonancia-magnetica-idime-ibague	Ibagué	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	IDIME IBAGUE	011
ibague-109-ayudas-diagnosticas-resonancia-magnetica-inst-ultratecnologia-medica-sas-cadiz	Ibagué	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	INST ULTRATECNOLOGIA MEDICA SAS CADIZ	011
ibague-8-hospitalizacion-hospitalizacion-ctro-integral-pac-medicadiz-sas	Ibagué	HOSPITALIZACIÓN	HOSPITALIZACIÓN	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-110-informacion-y-telemedicina-centro-integral-de-atencion-al-usuario-y-telemedicina-centro-integral-de-atencion-al-usuario-ibague	Ibagué	INFORMACIÓN Y TELEMEDICINA	CENTRO INTEGRAL DE ATENCION AL USUARIO Y TELEMEDICINA	CENTRO INTEGRAL DE ATENCION AL USUARIO IBAGUÉ	111
ibague-111-laboratorio-clinico-laboratorio-clinico-idime-ibague	Ibagué	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	IDIME IBAGUE	011
ibague-112-laboratorio-clinico-laboratorio-clinico-laboratorio-clinico-ceim	Ibagué	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO CEIM	011
ibague-114-maternidad-sala-de-parto-ctro-integral-pac-medicadiz-sas	Ibagué	MATERNIDAD	SALA DE PARTO	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-115-odontologia-cirugia-oral-centro-medico-odontologico-cmo-pac	Ibagué	ODONTOLOGÍA	CIRUGÍA ORAL	CENTRO MEDICO ODONTOLOGICO CMO PAC	001
ibague-116-odontologia-endodoncia-centro-medico-odontologico-cmo-pac	Ibagué	ODONTOLOGÍA	ENDODONCIA	CENTRO MEDICO ODONTOLOGICO CMO PAC	001
ibague-117-odontologia-odontologia-general-centro-medico-odontologico-cmo-pac	Ibagué	ODONTOLOGÍA	ODONTOLOGÍA GENERAL	CENTRO MEDICO ODONTOLOGICO CMO PAC	011
ibague-118-odontologia-odontopediatria-centro-medico-odontologico-cmo-pac	Ibagué	ODONTOLOGÍA	ODONTOPEDIATRIA	CENTRO MEDICO ODONTOLOGICO CMO PAC	011
ibague-119-red-de-especialidades-alergologia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	ALERGOLOGÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	001
ibague-121-red-de-especialidades-cardiologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	CARDIOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-122-red-de-especialidades-cardiologia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	CARDIOLOGÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-123-red-de-especialidades-cirugia-general-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-124-red-de-especialidades-cirugia-general-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-125-red-de-especialidades-cirugia-maxilo-facial-centro-medico-odontologico-cmo-pac	Ibagué	RED DE ESPECIALIDADES	CIRUGÍA MAXILO FACIAL	CENTRO MEDICO ODONTOLOGICO CMO PAC	011
ibague-126-red-de-especialidades-cirugia-pediatrica-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	CIRUGÍA PEDIÁTRICA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-127-red-de-especialidades-coloproctologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	COLOPROCTOLOGIA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-128-red-de-especialidades-dermatologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	DERMATOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-129-red-de-especialidades-dermatologia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	DERMATOLOGÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-130-red-de-especialidades-endocrinologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	ENDOCRINOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-131-red-de-especialidades-gastroenterologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-132-red-de-especialidades-ginecobstetricia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-133-red-de-especialidades-ginecobstetricia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	GINECOBSTETRICIA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-134-red-de-especialidades-hematologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	HEMATOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-136-red-de-especialidades-medicina-general-centro-integral-de-atencion-al-usuario-ibague	Ibagué	RED DE ESPECIALIDADES	MEDICINA GENERAL	CENTRO INTEGRAL DE ATENCION AL USUARIO IBAGUÉ	111
ibague-137-red-de-especialidades-medicina-interna-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	MEDICINA INTERNA	CTRO INTEGRAL PAC MEDICADIZ SAS	111
ibague-138-red-de-especialidades-medicina-interna-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	MEDICINA INTERNA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-139-red-de-especialidades-nefrologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	NEFROLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-140-red-de-especialidades-neumologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	NEUMOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-141-red-de-especialidades-neurologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	NEUROLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-142-red-de-especialidades-neurologia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	NEUROLOGÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	001
ibague-143-red-de-especialidades-oftalmologia-clinica-ocuvision-laser-centro-medico-s-a-s	Ibagué	RED DE ESPECIALIDADES	OFTALMOLOGÍA	CLINICA OCUVISION LASER CENTRO MEDICO S.A.S	011
ibague-144-red-de-especialidades-ortopedia-y-traumatologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-145-red-de-especialidades-ortopedia-y-traumatologia-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	011
ibague-146-red-de-especialidades-otorrinolaringologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	OTORRINOLARINGOLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	100
ibague-147-red-de-especialidades-pediatria-instituto-medico-integral-colombiano-ips	Ibagué	RED DE ESPECIALIDADES	PEDIATRÍA	INSTITUTO MEDICO INTEGRAL COLOMBIANO IPS	111
ibague-148-red-de-especialidades-psicologia-psicomedic-center-ips	Ibagué	RED DE ESPECIALIDADES	PSICOLOGÍA	PSICOMEDIC CENTER IPS	011
ibague-150-red-de-especialidades-psiquiatria-psicomedic-center-ips	Ibagué	RED DE ESPECIALIDADES	PSIQUIATRÍA	PSICOMEDIC CENTER IPS	011
ibague-151-red-de-especialidades-urologia-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE ESPECIALIDADES	UROLOGÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-152-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-amedent-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA AMEDENT SAS	001
ibague-153-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-154-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-amedent-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA AMEDENT SAS	001
ibague-155-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-157-red-de-hospitalizacion-y-cirugia-hospitalizacion-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-158-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-160-red-de-hospitalizacion-y-cirugia-sala-de-parto-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-162-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-163-red-de-urgencias-urgencias-adulto-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE URGENCIAS	URGENCIAS ADULTO	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-164-red-de-urgencias-urgencias-maternas-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE URGENCIAS	URGENCIAS MATERNAS	CTRO INTEGRAL PAC MEDICADIZ SAS	001
ibague-165-red-de-urgencias-urgencias-ortopedicas-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-166-red-de-urgencias-urgencias-pediatricas-ctro-integral-pac-medicadiz-sas	Ibagué	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-168-terapias-terapia-fisica-domiciliaria-promover-sas	Ibagué	TERAPIAS	TERAPIA FÍSICA DOMICILIARIA	PROMOVER SAS	100
ibague-169-terapias-terapia-fisica-ambulatoria-clinica-amedent-sas	Ibagué	TERAPIAS	TERAPIA FÍSICA AMBULATORIA	CLINICA AMEDENT SAS	011
ibague-171-terapias-terapia-fisica-ambulatoria-ctro-integral-pac-medicadiz-sas	Ibagué	TERAPIAS	TERAPIA FÍSICA AMBULATORIA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-172-terapias-terapia-foniatria-ctro-integral-pac-medicadiz-sas	Ibagué	TERAPIAS	TERAPIA FONIATRÍA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-173-terapias-terapia-foniatria-psicomedic-center-ips	Ibagué	TERAPIAS	TERAPIA FONIATRÍA	PSICOMEDIC CENTER IPS	011
ibague-174-terapias-terapia-respiratoria-domiciliaria-promover-sas	Ibagué	TERAPIAS	TERAPIA RESPIRATORIA DOMICILIARIA	PROMOVER SAS	100
ibague-175-terapias-terapia-respiratoria-ambulatoria-clinica-amedent-sas	Ibagué	TERAPIAS	TERAPIA RESPIRATORIA AMBULATORIA	CLINICA AMEDENT SAS	011
ibague-177-terapias-terapia-respiratoria-ambulatoria-ctro-integral-pac-medicadiz-sas	Ibagué	TERAPIAS	TERAPIA RESPIRATORIA AMBULATORIA	CTRO INTEGRAL PAC MEDICADIZ SAS	011
ibague-178-urgencias-odontologicas-horario-habil-urgencias-odontologicas-horario-habil-centro-medico-odontologico-cmo-pac	Ibagué	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	CENTRO MEDICO ODONTOLOGICO CMO PAC	011
ibague-179-urgencias-odontologicas-horario-no-habil-urgencias-odontologicas-horario-no-habil-clinica-amedent-sas	Ibagué	URGENCIAS ODONTOLÓGICAS HORARIO NO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO NO HÁBIL	CLINICA AMEDENT SAS	011
bogota-194-ayudas-diagnosticas-angiografia-y-hemodinamia-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	ANGIOGRAFÍA Y HEMODINAMIA	CLINICA DEL COUNTRY SA	001
bogota-196-ayudas-diagnosticas-cateterismo-cardiaco-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	CATETERISMO CARDIACO	CLINICA DEL COUNTRY SA	001
bogota-198-ayudas-diagnosticas-colonoscopia-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	COLONOSCOPIA	CENTRO POLICLINICO DEL OLAYA	011
bogota-199-ayudas-diagnosticas-ecocardiograma-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-200-ayudas-diagnosticas-ecocardiograma-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-201-ayudas-diagnosticas-ecocardiograma-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	CENTRO POLICLINICO DEL OLAYA	011
bogota-202-ayudas-diagnosticas-ecocardiograma-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	CLINICA DEL COUNTRY SA	001
bogota-203-ayudas-diagnosticas-ecocardiograma-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	FUNDACION CLINICA SHAIO	001
bogota-204-ayudas-diagnosticas-ecocardiograma-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	ECOCARDIOGRAMA	INSTITUTO ROOSEVELT	011
bogota-205-ayudas-diagnosticas-ecografia-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-206-ayudas-diagnosticas-ecografia-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-207-ayudas-diagnosticas-ecografia-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CENTRO POLICLINICO DEL OLAYA	011
bogota-208-ayudas-diagnosticas-ecografia-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CLINICA DEL COUNTRY SA	001
bogota-209-ayudas-diagnosticas-ecografia-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CLINICA LOS NOGALES SAS	001
bogota-210-ayudas-diagnosticas-ecografia-centro-medico-colsubsidio-calle-26	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-211-ayudas-diagnosticas-ecografia-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	FUNDACION CLINICA SHAIO	001
bogota-212-ayudas-diagnosticas-ecografia-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	ECOGRAFÍA	INSTITUTO ROOSEVELT	011
bogota-213-ayudas-diagnosticas-electrocardiograma-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-214-ayudas-diagnosticas-electrocardiograma-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-215-ayudas-diagnosticas-electrocardiograma-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	CENTRO POLICLINICO DEL OLAYA	011
bogota-216-ayudas-diagnosticas-electrocardiograma-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	CLINICA DEL COUNTRY SA	001
bogota-217-ayudas-diagnosticas-electrocardiograma-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	FUNDACION CLINICA SHAIO	001
bogota-218-ayudas-diagnosticas-electrocardiograma-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROCARDIOGRAMA	INSTITUTO ROOSEVELT	011
bogota-219-ayudas-diagnosticas-electroencefalograma-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROENCEFALOGRAMA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-220-ayudas-diagnosticas-electromiografia-y-neuroconduccion-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ELECTROMIOGRAFÍA Y NEUROCONDUCCIÓN	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-221-ayudas-diagnosticas-endoscopia-digestiva-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	ENDOSCOPIA DIGESTIVA	CENTRO POLICLINICO DEL OLAYA	011
bogota-222-ayudas-diagnosticas-escanografia-tac-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-223-ayudas-diagnosticas-escanografia-tac-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-224-ayudas-diagnosticas-escanografia-tac-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CENTRO POLICLINICO DEL OLAYA	011
bogota-225-ayudas-diagnosticas-escanografia-tac-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CLINICA DEL COUNTRY SA	001
bogota-226-ayudas-diagnosticas-escanografia-tac-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CLINICA LOS NOGALES SAS	001
bogota-227-ayudas-diagnosticas-escanografia-tac-centro-medico-colsubsidio-calle-26	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-228-ayudas-diagnosticas-escanografia-tac-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	FUNDACION CLINICA SHAIO	001
bogota-229-ayudas-diagnosticas-escanografia-tac-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	ESCANOGRAFÍA (TAC)	INSTITUTO ROOSEVELT	011
bogota-230-ayudas-diagnosticas-mamografia-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-231-ayudas-diagnosticas-mamografia-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	CLINICA DEL COUNTRY SA	001
bogota-232-ayudas-diagnosticas-mamografia-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	CLINICA LOS NOGALES SAS	001
bogota-233-ayudas-diagnosticas-mamografia-centro-medico-colsubsidio-calle-26	Bogotá	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-234-ayudas-diagnosticas-mamografia-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	MAMOGRAFIA	FUNDACION CLINICA SHAIO	001
bogota-235-ayudas-diagnosticas-medicina-nuclear-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	MEDICINA NUCLEAR	CLINICA DEL COUNTRY SA	001
bogota-236-ayudas-diagnosticas-medicina-nuclear-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	MEDICINA NUCLEAR	FUNDACION CLINICA SHAIO	001
bogota-237-ayudas-diagnosticas-pruebas-oftalmologicas-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-238-ayudas-diagnosticas-pruebas-oftalmologicas-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	CENTRO POLICLINICO DEL OLAYA	011
bogota-239-ayudas-diagnosticas-pruebas-oftalmologicas-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	CLINICA DEL COUNTRY SA	001
bogota-240-ayudas-diagnosticas-pruebas-oftalmologicas-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	CLINICA LOS NOGALES SAS	001
bogota-241-ayudas-diagnosticas-pruebas-oftalmologicas-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	FUNDACION CLINICA SHAIO	001
bogota-242-ayudas-diagnosticas-pruebas-oftalmologicas-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS OFTALMOLÓGICAS	INSTITUTO ROOSEVELT	011
bogota-243-ayudas-diagnosticas-pruebas-vasculares-perifericas-no-invasivas-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS VASCULARES PERIFÉRICAS NO INVASIVAS	CLINICA DEL COUNTRY SA	001
bogota-244-ayudas-diagnosticas-pruebas-vasculares-perifericas-no-invasivas-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	PRUEBAS VASCULARES PERIFÉRICAS NO INVASIVAS	FUNDACION CLINICA SHAIO	001
bogota-245-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-246-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-247-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CENTRO POLICLINICO DEL OLAYA	011
bogota-248-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CLINICA DEL COUNTRY SA	001
bogota-249-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CLINICA LOS NOGALES SAS	001
bogota-250-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-centro-medico-colsubsidio-calle-26	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-251-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	FUNDACION CLINICA SHAIO	001
bogota-252-ayudas-diagnosticas-radiologia-e-imagenes-diagnosticas-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	RADIOLOGÍA E IMÁGENES DIAGNOSTICAS	INSTITUTO ROOSEVELT	011
bogota-253-ayudas-diagnosticas-resonancia-magnetica-administradora-clinica-la-colina-sas	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-254-ayudas-diagnosticas-resonancia-magnetica-centro-de-diagnostico-medico-sa-cedimed	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-255-ayudas-diagnosticas-resonancia-magnetica-centro-policlinico-del-olaya	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CENTRO POLICLINICO DEL OLAYA	011
bogota-256-ayudas-diagnosticas-resonancia-magnetica-clinica-del-country-sa	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CLINICA DEL COUNTRY SA	001
bogota-257-ayudas-diagnosticas-resonancia-magnetica-clinica-los-nogales-sas	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CLINICA LOS NOGALES SAS	001
bogota-258-ayudas-diagnosticas-resonancia-magnetica-centro-medico-colsubsidio-calle-26	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-259-ayudas-diagnosticas-resonancia-magnetica-fundacion-clinica-shaio	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	FUNDACION CLINICA SHAIO	001
bogota-260-ayudas-diagnosticas-resonancia-magnetica-instituto-roosevelt	Bogotá	AYUDAS DIAGNÓSTICAS	RESONANCIA MAGNÉTICA	INSTITUTO ROOSEVELT	011
bogota-264-hospitalizacion-hospitalizacion-centro-policlinico-del-olaya	Bogotá	HOSPITALIZACIÓN	HOSPITALIZACIÓN	CENTRO POLICLINICO DEL OLAYA	011
bogota-265-hospitalizacion-hospitalizacion-clinica-del-country-sa	Bogotá	HOSPITALIZACIÓN	HOSPITALIZACIÓN	CLINICA DEL COUNTRY SA	001
bogota-266-hospitalizacion-hospitalizacion-clinica-los-nogales-sas	Bogotá	HOSPITALIZACIÓN	HOSPITALIZACIÓN	CLINICA LOS NOGALES SAS	011
bogota-267-hospitalizacion-hospitalizacion-clinica-universidad-de-la-sabana	Bogotá	HOSPITALIZACIÓN	HOSPITALIZACIÓN	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-269-informacion-y-telemedicina-centro-integral-de-atencion-al-usuario-y-telemedicina-centro-integral-de-atencion-al-usuario-bogota	Bogotá	INFORMACIÓN Y TELEMEDICINA	CENTRO INTEGRAL DE ATENCION AL USUARIO Y TELEMEDICINA	CENTRO INTEGRAL DE ATENCION AL USUARIO BOGOTÁ	111
bogota-270-laboratorio-clinico-laboratorio-clinico-centro-policlinico-del-olaya	Bogotá	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	CENTRO POLICLINICO DEL OLAYA	011
bogota-271-laboratorio-clinico-laboratorio-clinico-centro-medico-colsubsidio-calle-26	Bogotá	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	CENTRO MEDICO COLSUBSIDIO CALLE 26	011
bogota-272-laboratorio-clinico-laboratorio-clinico-fundacion-clinica-shaio	Bogotá	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	FUNDACION CLINICA SHAIO	001
bogota-273-laboratorio-clinico-laboratorio-clinico-instituto-roosevelt	Bogotá	LABORATORIO CLÍNICO	LABORATORIO CLÍNICO	INSTITUTO ROOSEVELT	011
bogota-275-maternidad-sala-de-parto-administradora-clinica-la-colina-sas	Bogotá	MATERNIDAD	SALA DE PARTO	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-276-maternidad-sala-de-parto-centro-policlinico-del-olaya	Bogotá	MATERNIDAD	SALA DE PARTO	CENTRO POLICLINICO DEL OLAYA	011
bogota-277-maternidad-sala-de-parto-clinica-del-country-sa	Bogotá	MATERNIDAD	SALA DE PARTO	CLINICA DEL COUNTRY SA	001
bogota-278-maternidad-sala-de-parto-clinica-de-la-mujer-s-a-s	Bogotá	MATERNIDAD	SALA DE PARTO	CLINICA DE LA MUJER S.A.S.	001
bogota-279-maternidad-sala-de-parto-clinica-palermo	Bogotá	MATERNIDAD	SALA DE PARTO	CLINICA PALERMO	011
bogota-280-odontologia-cirugia-oral-centro-integral-cpo-calle-98-pac	Bogotá	ODONTOLOGÍA	CIRUGÍA ORAL	CENTRO INTEGRAL CPO CALLE 98 PAC	001
bogota-281-odontologia-cirugia-oral-cpo-santa-lucia-pac	Bogotá	ODONTOLOGÍA	CIRUGÍA ORAL	CPO SANTA LUCIA PAC	001
bogota-282-odontologia-cirugia-oral-instituto-estudios-cientificos-odontolog	Bogotá	ODONTOLOGÍA	CIRUGÍA ORAL	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	001
bogota-283-odontologia-endodoncia-centro-integral-cpo-calle-98-pac	Bogotá	ODONTOLOGÍA	ENDODONCIA	CENTRO INTEGRAL CPO CALLE 98 PAC	001
bogota-284-odontologia-endodoncia-cpo-santa-lucia-pac	Bogotá	ODONTOLOGÍA	ENDODONCIA	CPO SANTA LUCIA PAC	001
bogota-285-odontologia-endodoncia-instituto-estudios-cientificos-odontolog	Bogotá	ODONTOLOGÍA	ENDODONCIA	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	001
bogota-286-odontologia-odontologia-general-centro-integral-cpo-calle-98-pac	Bogotá	ODONTOLOGÍA	ODONTOLOGÍA GENERAL	CENTRO INTEGRAL CPO CALLE 98 PAC	011
bogota-287-odontologia-odontologia-general-cpo-santa-lucia-pac	Bogotá	ODONTOLOGÍA	ODONTOLOGÍA GENERAL	CPO SANTA LUCIA PAC	011
bogota-288-odontologia-odontologia-general-instituto-estudios-cientificos-odontolog	Bogotá	ODONTOLOGÍA	ODONTOLOGÍA GENERAL	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	011
bogota-289-odontologia-odontopediatria-centro-integral-cpo-calle-98-pac	Bogotá	ODONTOLOGÍA	ODONTOPEDIATRIA	CENTRO INTEGRAL CPO CALLE 98 PAC	011
bogota-290-odontologia-odontopediatria-cpo-santa-lucia-pac	Bogotá	ODONTOLOGÍA	ODONTOPEDIATRIA	CPO SANTA LUCIA PAC	011
bogota-291-odontologia-odontopediatria-instituto-estudios-cientificos-odontolog	Bogotá	ODONTOLOGÍA	ODONTOPEDIATRIA	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	011
bogota-292-red-de-especialidades-alergologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	ALERGOLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-293-red-de-especialidades-alergologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	ALERGOLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-294-red-de-especialidades-alergologia-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	ALERGOLOGÍA	INSTITUTO ROOSEVELT	001
bogota-295-red-de-especialidades-cardiologia-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	ADMINISTRADORA CLINICA LA COLINA SAS	111
bogota-296-red-de-especialidades-cardiologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	CENTRO POLICLINICO DEL OLAYA	111
bogota-297-red-de-especialidades-cardiologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	CLINICA DEL COUNTRY SA	111
bogota-298-red-de-especialidades-cardiologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	CLINICA LOS NOGALES SAS	111
bogota-299-red-de-especialidades-cardiologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	FUNDACION CLINICA SHAIO	111
bogota-300-red-de-especialidades-cardiologia-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	CARDIOLOGÍA	INSTITUTO ROOSEVELT	111
bogota-301-red-de-especialidades-cirugia-general-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	ADMINISTRADORA CLINICA LA COLINA SAS	111
bogota-302-red-de-especialidades-cirugia-general-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	CENTRO POLICLINICO DEL OLAYA	111
bogota-303-red-de-especialidades-cirugia-general-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	CLINICA DEL COUNTRY SA	111
bogota-304-red-de-especialidades-cirugia-general-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	CLINICA LOS NOGALES SAS	111
bogota-305-red-de-especialidades-cirugia-general-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	FUNDACION CLINICA SHAIO	111
bogota-306-red-de-especialidades-cirugia-general-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA GENERAL	INSTITUTO ROOSEVELT	111
bogota-307-red-de-especialidades-cirugia-maxilo-facial-centro-integral-cpo-calle-98-pac	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA MAXILO FACIAL	CENTRO INTEGRAL CPO CALLE 98 PAC	011
bogota-308-red-de-especialidades-cirugia-maxilo-facial-cpo-santa-lucia-pac	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA MAXILO FACIAL	CPO SANTA LUCIA PAC	011
bogota-309-red-de-especialidades-cirugia-maxilo-facial-instituto-estudios-cientificos-odontolog	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA MAXILO FACIAL	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	011
bogota-310-red-de-especialidades-cirugia-pediatrica-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA PEDIÁTRICA	CENTRO POLICLINICO DEL OLAYA	001
bogota-311-red-de-especialidades-cirugia-pediatrica-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA PEDIÁTRICA	CLINICA DEL COUNTRY SA	001
bogota-312-red-de-especialidades-cirugia-pediatrica-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA PEDIÁTRICA	CLINICA LOS NOGALES SAS	001
bogota-313-red-de-especialidades-cirugia-pediatrica-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	CIRUGÍA PEDIÁTRICA	FUNDACION CLINICA SHAIO	001
bogota-314-red-de-especialidades-coloproctologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	COLOPROCTOLOGIA	CENTRO POLICLINICO DEL OLAYA	001
bogota-315-red-de-especialidades-coloproctologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	COLOPROCTOLOGIA	CLINICA DEL COUNTRY SA	001
bogota-316-red-de-especialidades-coloproctologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	COLOPROCTOLOGIA	CLINICA LOS NOGALES SAS	001
bogota-317-red-de-especialidades-coloproctologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	COLOPROCTOLOGIA	FUNDACION CLINICA SHAIO	001
bogota-318-red-de-especialidades-dermatologia-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	ADMINISTRADORA CLINICA LA COLINA SAS	111
bogota-319-red-de-especialidades-dermatologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	CENTRO POLICLINICO DEL OLAYA	111
bogota-320-red-de-especialidades-dermatologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	CLINICA DEL COUNTRY SA	111
bogota-321-red-de-especialidades-dermatologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	CLINICA LOS NOGALES SAS	111
bogota-322-red-de-especialidades-dermatologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	FUNDACION CLINICA SHAIO	111
bogota-323-red-de-especialidades-dermatologia-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	DERMATOLOGÍA	INSTITUTO ROOSEVELT	111
bogota-324-red-de-especialidades-endocrinologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	ENDOCRINOLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-325-red-de-especialidades-endocrinologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	ENDOCRINOLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-326-red-de-especialidades-endocrinologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	ENDOCRINOLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-327-red-de-especialidades-endocrinologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	ENDOCRINOLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-328-red-de-especialidades-gastroenterologia-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-329-red-de-especialidades-gastroenterologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	CENTRO POLICLINICO DEL OLAYA	011
bogota-330-red-de-especialidades-gastroenterologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	CLINICA DEL COUNTRY SA	011
bogota-331-red-de-especialidades-gastroenterologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	CLINICA LOS NOGALES SAS	011
bogota-332-red-de-especialidades-gastroenterologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	GASTROENTEROLOGÍA	FUNDACION CLINICA SHAIO	011
bogota-333-red-de-especialidades-ginecobstetricia-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	ADMINISTRADORA CLINICA LA COLINA SAS	111
bogota-334-red-de-especialidades-ginecobstetricia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CENTRO POLICLINICO DEL OLAYA	111
bogota-335-red-de-especialidades-ginecobstetricia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CLINICA DEL COUNTRY SA	111
bogota-336-red-de-especialidades-ginecobstetricia-clinica-palermo	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CLINICA PALERMO	111
bogota-337-red-de-especialidades-ginecobstetricia-clinica-de-la-mujer-s-a-s	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CLINICA DE LA MUJER S.A.S.	111
bogota-338-red-de-especialidades-ginecobstetricia-clinica-universidad-de-la-sabana	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CLINICA UNIVERSIDAD DE LA SABANA	111
bogota-339-red-de-especialidades-ginecobstetricia-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	111
bogota-340-red-de-especialidades-ginecobstetricia-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	GINECOBSTETRICIA	INSTITUTO ROOSEVELT	111
bogota-341-red-de-especialidades-hematologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	HEMATOLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-342-red-de-especialidades-hematologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	HEMATOLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-343-red-de-especialidades-hematologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	HEMATOLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-344-red-de-especialidades-hematologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	HEMATOLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-345-red-de-especialidades-medicina-general-centro-integral-de-atencion-al-usuario-bogota	Bogotá	RED DE ESPECIALIDADES	MEDICINA GENERAL	CENTRO INTEGRAL DE ATENCION AL USUARIO BOGOTÁ	111
bogota-346-red-de-especialidades-medicina-interna-administradora-clinica-la-colina-sas	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	ADMINISTRADORA CLINICA LA COLINA SAS	111
bogota-347-red-de-especialidades-medicina-interna-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	CENTRO POLICLINICO DEL OLAYA	111
bogota-348-red-de-especialidades-medicina-interna-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	CLINICA DEL COUNTRY SA	111
bogota-349-red-de-especialidades-medicina-interna-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	CLINICA LOS NOGALES SAS	111
bogota-350-red-de-especialidades-medicina-interna-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	FUNDACION CLINICA SHAIO	111
bogota-351-red-de-especialidades-medicina-interna-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	MEDICINA INTERNA	INSTITUTO ROOSEVELT	111
bogota-352-red-de-especialidades-nefrologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	NEFROLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-353-red-de-especialidades-nefrologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	NEFROLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-354-red-de-especialidades-nefrologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	NEFROLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-355-red-de-especialidades-nefrologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	NEFROLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-356-red-de-especialidades-neumologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	NEUMOLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-357-red-de-especialidades-neumologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	NEUMOLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-358-red-de-especialidades-neumologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	NEUMOLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-359-red-de-especialidades-neumologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	NEUMOLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-360-red-de-especialidades-neurologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	NEUROLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-361-red-de-especialidades-neurologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	NEUROLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-362-red-de-especialidades-neurologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	NEUROLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-363-red-de-especialidades-neurologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	NEUROLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-364-red-de-especialidades-oftalmologia-centro-de-diagnostico-medico-sa-cedimed	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	011
bogota-365-red-de-especialidades-oftalmologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	CENTRO POLICLINICO DEL OLAYA	011
bogota-366-red-de-especialidades-oftalmologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	CLINICA DEL COUNTRY SA	011
bogota-367-red-de-especialidades-oftalmologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	CLINICA LOS NOGALES SAS	011
bogota-368-red-de-especialidades-oftalmologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	FUNDACION CLINICA SHAIO	011
bogota-369-red-de-especialidades-oftalmologia-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	OFTALMOLOGÍA	INSTITUTO ROOSEVELT	011
bogota-370-red-de-especialidades-ortopedia-y-traumatologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	CENTRO POLICLINICO DEL OLAYA	011
bogota-371-red-de-especialidades-ortopedia-y-traumatologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	CLINICA DEL COUNTRY SA	011
bogota-372-red-de-especialidades-ortopedia-y-traumatologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	CLINICA LOS NOGALES SAS	011
bogota-373-red-de-especialidades-ortopedia-y-traumatologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	ORTOPEDIA Y TRAUMATOLOGÍA	FUNDACION CLINICA SHAIO	011
bogota-374-red-de-especialidades-otorrinolaringologia-centro-de-diagnostico-medico-sa-cedimed	Bogotá	RED DE ESPECIALIDADES	OTORRINOLARINGOLOGÍA	CENTRO DE DIAGNOSTICO MEDICO SA CEDIMED	100
bogota-375-red-de-especialidades-pediatria-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	CENTRO POLICLINICO DEL OLAYA	111
bogota-376-red-de-especialidades-pediatria-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	111
bogota-377-red-de-especialidades-pediatria-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	CLINICA DEL COUNTRY SA	111
bogota-378-red-de-especialidades-pediatria-clinica-de-la-mujer-s-a-s	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	CLINICA DE LA MUJER S.A.S.	111
bogota-379-red-de-especialidades-pediatria-clinica-universidad-de-la-sabana	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	CLINICA UNIVERSIDAD DE LA SABANA	111
bogota-380-red-de-especialidades-pediatria-instituto-roosevelt	Bogotá	RED DE ESPECIALIDADES	PEDIATRÍA	INSTITUTO ROOSEVELT	111
bogota-381-red-de-especialidades-psicologia-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE ESPECIALIDADES	PSICOLOGÍA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	011
bogota-382-red-de-especialidades-psicologia-clinica-de-la-mujer-s-a-s	Bogotá	RED DE ESPECIALIDADES	PSICOLOGÍA	CLINICA DE LA MUJER S.A.S.	011
bogota-383-red-de-especialidades-psiquiatria-clinica-la-inmaculada	Bogotá	RED DE ESPECIALIDADES	PSIQUIATRÍA	CLINICA LA INMACULADA	011
bogota-384-red-de-especialidades-urologia-centro-policlinico-del-olaya	Bogotá	RED DE ESPECIALIDADES	UROLOGÍA	CENTRO POLICLINICO DEL OLAYA	001
bogota-385-red-de-especialidades-urologia-clinica-del-country-sa	Bogotá	RED DE ESPECIALIDADES	UROLOGÍA	CLINICA DEL COUNTRY SA	001
bogota-386-red-de-especialidades-urologia-clinica-los-nogales-sas	Bogotá	RED DE ESPECIALIDADES	UROLOGÍA	CLINICA LOS NOGALES SAS	001
bogota-387-red-de-especialidades-urologia-fundacion-clinica-shaio	Bogotá	RED DE ESPECIALIDADES	UROLOGÍA	FUNDACION CLINICA SHAIO	001
bogota-388-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-389-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CENTRO POLICLINICO DEL OLAYA	011
bogota-390-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA DEL COUNTRY SA	011
bogota-391-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-los-nogales-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA LOS NOGALES SAS	011
bogota-392-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-universidad-de-la-sabana	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-393-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA DE LA MUJER S.A.S.	001
bogota-394-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CLINICA PALERMO	011
bogota-395-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-396-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-397-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CENTRO POLICLINICO DEL OLAYA	011
bogota-398-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA DEL COUNTRY SA	011
bogota-399-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-clinica-los-nogales-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA LOS NOGALES SAS	011
bogota-400-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-clinica-universidad-de-la-sabana	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-401-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA DE LA MUJER S.A.S.	001
bogota-402-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CLINICA PALERMO	011
bogota-403-red-de-hospitalizacion-y-cirugia-cirugia-ambulatoria-y-hospitalaria-especial-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	CIRUGÍA AMBULATORIA Y HOSPITALARIA ESPECIAL	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-404-red-de-hospitalizacion-y-cirugia-hospitalizacion-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-405-red-de-hospitalizacion-y-cirugia-hospitalizacion-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CENTRO POLICLINICO DEL OLAYA	011
bogota-406-red-de-hospitalizacion-y-cirugia-hospitalizacion-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CLINICA DEL COUNTRY SA	011
bogota-407-red-de-hospitalizacion-y-cirugia-hospitalizacion-clinica-los-nogales-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CLINICA LOS NOGALES SAS	011
bogota-408-red-de-hospitalizacion-y-cirugia-hospitalizacion-clinica-universidad-de-la-sabana	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-409-red-de-hospitalizacion-y-cirugia-hospitalizacion-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CLINICA DE LA MUJER S.A.S.	001
bogota-410-red-de-hospitalizacion-y-cirugia-hospitalizacion-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CLINICA PALERMO	011
bogota-411-red-de-hospitalizacion-y-cirugia-hospitalizacion-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-412-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-413-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CENTRO POLICLINICO DEL OLAYA	011
bogota-414-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CLINICA DEL COUNTRY SA	011
bogota-415-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-clinica-los-nogales-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CLINICA LOS NOGALES SAS	011
bogota-416-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-clinica-universidad-de-la-sabana	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-417-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CLINICA DE LA MUJER S.A.S.	001
bogota-418-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CLINICA PALERMO	011
bogota-419-red-de-hospitalizacion-y-cirugia-hospitalizacion-programada-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	HOSPITALIZACIÓN PROGRAMADA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-420-red-de-hospitalizacion-y-cirugia-sala-de-parto-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-421-red-de-hospitalizacion-y-cirugia-sala-de-parto-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CENTRO POLICLINICO DEL OLAYA	011
bogota-422-red-de-hospitalizacion-y-cirugia-sala-de-parto-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CLINICA DEL COUNTRY SA	001
bogota-423-red-de-hospitalizacion-y-cirugia-sala-de-parto-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CLINICA DE LA MUJER S.A.S.	001
bogota-424-red-de-hospitalizacion-y-cirugia-sala-de-parto-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CLINICA PALERMO	011
bogota-425-red-de-hospitalizacion-y-cirugia-sala-de-parto-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	SALA DE PARTO	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-426-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-administradora-clinica-la-colina-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-427-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-centro-policlinico-del-olaya	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CENTRO POLICLINICO DEL OLAYA	011
bogota-428-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-clinica-del-country-sa	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CLINICA DEL COUNTRY SA	011
bogota-429-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-clinica-los-nogales-sas	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CLINICA LOS NOGALES SAS	011
bogota-430-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-clinica-universidad-de-la-sabana	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-431-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-clinica-de-la-mujer-s-a-s	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CLINICA DE LA MUJER S.A.S.	001
bogota-432-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-clinica-palermo	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CLINICA PALERMO	011
bogota-433-red-de-hospitalizacion-y-cirugia-unidad-de-cuidados-intensivos-e-intermedios-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE HOSPITALIZACIÓN Y CIRUGÍA	UNIDAD DE CUIDADOS INTENSIVOS E INTERMEDIOS	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-434-red-de-urgencias-urgencias-adulto-administradora-clinica-la-colina-sas	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-435-red-de-urgencias-urgencias-adulto-centro-policlinico-del-olaya	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CENTRO POLICLINICO DEL OLAYA	011
bogota-436-red-de-urgencias-urgencias-adulto-clinica-del-country-sa	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CLINICA DEL COUNTRY SA	011
bogota-437-red-de-urgencias-urgencias-adulto-clinica-los-nogales-sas	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CLINICA LOS NOGALES SAS	011
bogota-438-red-de-urgencias-urgencias-adulto-clinica-universidad-de-la-sabana	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-439-red-de-urgencias-urgencias-adulto-clinica-de-la-mujer-s-a-s	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CLINICA DE LA MUJER S.A.S.	001
bogota-440-red-de-urgencias-urgencias-adulto-clinica-palermo	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CLINICA PALERMO	011
bogota-441-red-de-urgencias-urgencias-adulto-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE URGENCIAS	URGENCIAS ADULTO	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-442-red-de-urgencias-urgencias-maternas-administradora-clinica-la-colina-sas	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-443-red-de-urgencias-urgencias-maternas-centro-policlinico-del-olaya	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	CENTRO POLICLINICO DEL OLAYA	011
bogota-444-red-de-urgencias-urgencias-maternas-clinica-del-country-sa	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	CLINICA DEL COUNTRY SA	011
bogota-445-red-de-urgencias-urgencias-maternas-clinica-de-la-mujer-s-a-s	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	CLINICA DE LA MUJER S.A.S.	001
bogota-446-red-de-urgencias-urgencias-maternas-clinica-palermo	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	CLINICA PALERMO	011
bogota-447-red-de-urgencias-urgencias-maternas-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE URGENCIAS	URGENCIAS MATERNAS	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-448-red-de-urgencias-urgencias-ortopedicas-administradora-clinica-la-colina-sas	Bogotá	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-449-red-de-urgencias-urgencias-ortopedicas-centro-policlinico-del-olaya	Bogotá	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	CENTRO POLICLINICO DEL OLAYA	011
bogota-450-red-de-urgencias-urgencias-ortopedicas-clinica-del-country-sa	Bogotá	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	CLINICA DEL COUNTRY SA	011
bogota-451-red-de-urgencias-urgencias-ortopedicas-clinica-los-nogales-sas	Bogotá	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	CLINICA LOS NOGALES SAS	011
bogota-452-red-de-urgencias-urgencias-ortopedicas-clinica-universidad-de-la-sabana	Bogotá	RED DE URGENCIAS	URGENCIAS ORTOPÉDICAS	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-453-red-de-urgencias-urgencias-pediatricas-administradora-clinica-la-colina-sas	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	ADMINISTRADORA CLINICA LA COLINA SAS	011
bogota-454-red-de-urgencias-urgencias-pediatricas-centro-policlinico-del-olaya	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CENTRO POLICLINICO DEL OLAYA	011
bogota-455-red-de-urgencias-urgencias-pediatricas-clinica-del-country-sa	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CLINICA DEL COUNTRY SA	011
bogota-456-red-de-urgencias-urgencias-pediatricas-clinica-de-la-mujer-s-a-s	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CLINICA DE LA MUJER S.A.S.	001
bogota-457-red-de-urgencias-urgencias-pediatricas-clinica-universidad-de-la-sabana	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CLINICA UNIVERSIDAD DE LA SABANA	011
bogota-458-red-de-urgencias-urgencias-pediatricas-centro-materno-fetal-y-neonatal-country	Bogotá	RED DE URGENCIAS	URGENCIAS PEDIÁTRICAS	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-459-red-de-urgencias-urgencias-psiquiatricas-clinica-la-inmaculada	Bogotá	RED DE URGENCIAS	URGENCIAS PSIQUIATRICAS	CLINICA LA INMACULADA	001
bogota-460-terapias-terapia-foniatrica-terapias-catherin-tatiana-jimenez-sas	Bogotá	TERAPIAS	TERAPIA FONIÁTRICA	TERAPIAS CATHERIN TATIANA JIMENEZ SAS	011
bogota-461-terapias-terapia-fisica-bluecare-salud-bogota	Bogotá	TERAPIAS	TERAPIA FÍSICA	BLUECARE SALUD BOGOTA	011
bogota-462-terapias-terapia-fisica-centro-materno-fetal-y-neonatal-country	Bogotá	TERAPIAS	TERAPIA FÍSICA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-463-terapias-terapia-fisica-electrofisiatria-sas	Bogotá	TERAPIAS	TERAPIA FÍSICA	ELECTROFISIATRIA SAS	011
bogota-464-terapias-terapia-fisica-instituto-frankiln-d-roosevelt	Bogotá	TERAPIAS	TERAPIA FÍSICA	INSTITUTO FRANKILN D ROOSEVELT	011
bogota-465-terapias-terapia-fisica-terapias-catherin-tatiana-jimenez-sas	Bogotá	TERAPIAS	TERAPIA FÍSICA	TERAPIAS CATHERIN TATIANA JIMENEZ SAS	011
bogota-466-terapias-terapia-ocupacional-centro-materno-fetal-y-neonatal-country	Bogotá	TERAPIAS	TERAPIA OCUPACIONAL	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-467-terapias-terapia-ocupacional-electrofisiatria-sas	Bogotá	TERAPIAS	TERAPIA OCUPACIONAL	ELECTROFISIATRIA SAS	011
bogota-468-terapias-terapia-ocupacional-instituto-frankiln-d-roosevelt	Bogotá	TERAPIAS	TERAPIA OCUPACIONAL	INSTITUTO FRANKILN D ROOSEVELT	011
bogota-469-terapias-terapia-ocupacional-unidad-de-gastroenterologia-hepatologia	Bogotá	TERAPIAS	TERAPIA OCUPACIONAL	UNIDAD DE GASTROENTEROLOGIA, HEPATOLOGIA	011
bogota-470-terapias-terapia-respiratoria-centro-materno-fetal-y-neonatal-country	Bogotá	TERAPIAS	TERAPIA RESPIRATORIA	CENTRO MATERNO FETAL Y NEONATAL COUNTRY	001
bogota-471-terapias-terapia-respiratoria-fundacion-neumologica-colombiana	Bogotá	TERAPIAS	TERAPIA RESPIRATORIA	FUNDACION NEUMOLOGICA COLOMBIANA	011
bogota-472-terapias-terapia-respiratoria-instituto-frankiln-d-roosevelt	Bogotá	TERAPIAS	TERAPIA RESPIRATORIA	INSTITUTO FRANKILN D ROOSEVELT	011
bogota-531-urgencias-odontologicas-horario-habil-urgencias-odontologicas-horario-habil-centro-integral-cpo-calle-98-pac	Bogotá	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	CENTRO INTEGRAL CPO CALLE 98 PAC	011
bogota-532-urgencias-odontologicas-horario-habil-urgencias-odontologicas-horario-habil-cpo-santa-lucia-pac	Bogotá	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	CPO SANTA LUCIA PAC	011
bogota-533-urgencias-odontologicas-horario-habil-urgencias-odontologicas-horario-habil-instituto-estudios-cientificos-odontolog	Bogotá	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO HÁBIL	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	011
bogota-534-urgencias-odontologicas-horario-no-habil-urgencias-odontologicas-horario-no-habil-instituto-estudios-cientificos-odontolog	Bogotá	URGENCIAS ODONTOLÓGICAS HORARIO NO HÁBIL	URGENCIAS ODONTOLÓGICAS HORARIO NO HÁBIL	INSTITUTO ESTUDIOS CIENTIFICOS ODONTOLOG	011
`

export const networkProviders: FlatNetworkProvider[] = RAW_NETWORK_DATA.trim()
  .split("\n")
  .map((line) => {
    const [id, city, serviceType, service, name, flags] = line.split("\t")
    return {
      id,
      city,
      serviceType,
      service,
      name,
      esencial: flags[0] === "1",
      preferente: flags[1] === "1",
      elite: flags[2] === "1",
    }
  })

export const availableCities: string[] = ["Ibagué", "Bogotá"]

export const networkStats: NetworkStats = {
  institutionsByCity: {
    Ibagué: 20,
    Bogotá: 65,
  },
  recordsByCity: {
    Ibagué: 121,
    Bogotá: 389,
  },
}

export const networkNotes: NetworkNote[] = []