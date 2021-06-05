import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

@Injectable()
export class BasedadosProvider {
 constructor(private sqlite: SQLite) { }

 // Cria um banco caso não exista ou utiliza um banco existente com o nome no parametro
    public getDB() {
    return this.sqlite.create({
        name: 'products1.db',
        location: 'default'
    });
    }
    //Cria a estrutura do banco de dados
    public createDatabase() {
        return this.getDB()
        .then((db: SQLiteObject) => {
        // Criando as tabelas
        this.createTables(db);
        // Inserindo dados de categorias
        this.insertDefaultItems(db);

        this.insertDefaultProdutos(db);
        })
        .catch(e => console.log(e));
    }
    // Cria as tabelas no banco de dados
    private createTables(db: SQLiteObject) {
        db.sqlBatch([
        ['CREATE TABLE IF NOT EXISTS categories (id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
        ['CREATE TABLE IF NOT EXISTS products (id integer primary key AUTOINCREMENT NOT NULL, name TEXT, price REAL, duedate DATE, active integer, category_id integer, FOREIGN KEY(category_id) REFERENCES categories(id))']
        ])
        .then((e) => console.log('Tabelas criadas'))
        .catch(e => console.error('Erro ao criar as tabelas', e));
    }
    //Incluindo os dados iniciais
    private insertDefaultItems(db: SQLiteObject) {
        db.executeSql('select COUNT(id) as qtd from categories', {})
        .then((data: any) => {
          //Se não existe nenhum registro
          if (data.rows.item(0).qtd == 0) {
              //Registra categorias iniciais
              db.sqlBatch
              ([
                  ['insert into categories (id,name) values (?,?)', ['1']as any, ['Lanches']as any],
                  ['insert into categories (name) values (?)', ['Pratos'   ]as any],
                  ['insert into categories (name) values (?)', ['Sobremesa']as any],
                  ['insert into categories (name) values (?)', ['Bebidas'  ]as any]
              ])
              .then(() => console.log('Dados de categorias incluídos'))
              .catch(e => console.error('Erro ao incluir dados de categorias', e));
          }
        })
        .catch(e => console.error('Erro ao consultar a tabela categorias', e));
    }

    //Cadastrar Produtos
    private insertDefaultProdutos(db: SQLiteObject) {
        db.executeSql('select COUNT(id) as qtd from products', {})
        .then((data: any) => {
          //Se não existe nenhum registro
          if (data.rows.item(0).qtd == 0) {
              //Registra categorias iniciais
              db.sqlBatch
              ([
                  ['insert into PRODUCTS (id,name,price,category_id) values (?,?,?,?)',['1']as any,['Hamburger']as any, ['13.00']as any,['1']as any],
                  ['insert into products (name) values (?)', [''   ]as any],
                  ['insert into products (name) values (?)', ['']as any],
                  ['insert into products (name) values (?)', [''  ]as any]
              ])
              .then(() => console.log('Dados de categorias incluídos'))
              .catch(e => console.error('Erro ao incluir dados de categorias', e));
          }
        })
        .catch(e => console.error('Erro ao consultar a tabela categorias', e));
    }
}