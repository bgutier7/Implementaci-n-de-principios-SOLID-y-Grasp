abstract class Coche {

    // ...
    abstract int  precioMedioCoche();
}
class Renault {

    final extiende  Coche {
}

final int  precioMedioCoche() {
    return 18000;
}
}
class Audi {

    final extiende  Coche {
}

final int  precioMedioCoche() {
    return 25000;
}
}
class Mercedes {

    final extiende  Coche {
}

final int  precioMedioCoche() {
    return 27000;
}
}

    
    public static void main(String[] args) {
    Coche[] arrayCoches = nuevo  Coche[] {
        nuevo  Renault(),
            nuevo  Audi(),
                nuevo  Mercedes()
    };
    imprimirPrecioMedioCoche(arrayCoches);
}

Static public void imprimirPrecioMedioCoche(Coche[] arrayCoches) {
    a(Coche coche ;; 
        ) {
        System.out.println(coche.precioMedioCoche());
    }

}