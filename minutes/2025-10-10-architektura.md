# Zápisnica - Návrh architektúry systému
**Dátum:** 10. októbra 2025
**Čas:** 10:00 - 11:45
**Miesto:** Online (Microsoft Teams)
**Zapisovateľ:** [Meno zapisovateľa]

## Účastníci
- [Meno 1] - [Rola] ✓
- [Meno 2] - [Rola] ✓
- [Meno 3] - [Rola] ✓
- [Meno 4] - [Rola] ✓
- [Meno 5] - [Rola] ✓

## Zhodnotenie úloh z predchádzajúceho stretnutia
- ✅ **Databázová schéma** - dokončená, prezentovaná
- ✅ **UI Wireframes** - vytvorené pre hlavné komponenty
- ✅ **OpenCV štúdium** - základy osvojené
- ✅ **Vývojové prostredie** - Docker containers pripravené
- ⏳ **Testovací dataset** - našli sme 2 zdroje, čakáme na prístup

## Program stretnutia
1. Prezentácia databázovej schémy
2. Diskusia o system architektúre
3. API design
4. Deployment stratégia

## Diskusia a rozhodnutia

### 1. Databázová schéma
Prezentovaná schéma obsahuje hlavné entity:

```sql
-- Hlavné entity
Users (id, username, email, role, credits, virtual_points)
Projects (id, name, description, owner_id, created_at)
Documents (id, project_id, filename, file_path, status)
Annotations (id, document_id, user_id, type, coordinates, data)
Symbols (id, code, description, frequency)
CipherKeys (id, document_id, plaintext, ciphertext, mapping)
```

**Schválené:** Databázová schéma je dobrá pre MVP

### 2. System architektúra

#### Backend (Python + Django)
- **API Layer:** Django REST Framework
- **Processing Layer:** Celery pre async tasks
- **AI Module:** Separate microservice (FastAPI)
- **File Storage:** AWS S3 alebo local storage
- **Queue:** Redis pre task management

#### Frontend (React)
- **Main App:** Create React App with TypeScript
- **State Management:** Redux Toolkit
- **UI Library:** Material-UI alebo Ant Design
- **Canvas Library:** Fabric.js pre annotations

#### Infrastructure
- **Database:** PostgreSQL
- **Cache:** Redis
- **Web Server:** Nginx + Gunicorn
- **Deployment:** Docker + Docker Compose

### 3. API Design
Hlavné endpoints:

```
# Authentication
POST /api/auth/login
POST /api/auth/register
POST /api/auth/refresh

# Projects
GET /api/projects/
POST /api/projects/
GET /api/projects/{id}/

# Documents
POST /api/projects/{id}/documents/
GET /api/documents/{id}/
PUT /api/documents/{id}/annotations/

# Processing
POST /api/documents/{id}/preprocess/
POST /api/documents/{id}/detect-symbols/
POST /api/documents/{id}/reconstruct-table/
```

### 4. Deployment stratégia
- **Development:** Docker Compose na localhost
- **Staging:** Heroku alebo AWS EC2
- **Production:** AWS ECS alebo DigitalOcean Droplets
- **CI/CD:** GitHub Actions

## Technické rozhodnutia
1. **Python backend** - lepšia podpora pre AI/ML knižnice
2. **PostgreSQL** - JSON support pre flexible schémy
3. **Microservice pre AI** - možnosť nezávislého škálovania
4. **Docker** - konzistentné prostredie across environments

## Úlohy do nasledujúceho stretnutia
- [ ] [Meno]: Inicializovať Django projekt s databázou
- [ ] [Meno]: Setup React projekt s základnými componentmi
- [ ] [Meno]: Vytvoriť Docker configuration
- [ ] [Meno]: Implementovať prvý AI model (symbol detection)
- [ ] [Meno]: Nastaviť CI/CD pipeline

## Milestones
- **Týždeň 12:** MVP demo s basic features
- **Týždeň 14:** Alpha version s AI integration
- **Týždeň 16:** Beta version s full features
- **Týždeň 18:** Production ready release

## Nasledujúce stretnutie
**Dátum:** 17. októbra 2025
**Čas:** 10:00
**Miesto:** Miestnosť 123, FEI STU
**Agenda:** Progress update a prvé prototypy
