import java.util.Scanner;

public class fun {

    public static void tempo(Scanner sc) {
        System.out.println("Check if you have fever");
        double temp = sc.nextDouble();
        if (temp >= 100 && temp <= 106) {
            System.out.println("You have fever");
        } 
		else if  (temp>=95 && temp<=99) {
            if (temp == 99) {
                System.out.println("You might have a mild fever!");
            } else {
                System.out.println("You don't have fever");
            }
        }
        else {
            System.out.println("You might be dead by now");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            tempo(sc);
        }
    }
}
