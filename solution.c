#include <stdio.h>

int countPrettyNumbers(int L, int R) {
    int count = 0;
    for (int i = L; i <= R; i++) {
        int lastDigit = i % 10;
        if (lastDigit == 2 || lastDigit == 3 || lastDigit == 9) {
            count++;
        }
    }
    return count;
}

int main() {
    int T;
    scanf("%d", &T);

    for (int i = 0; i < T; i++) {
        int L, R;
        scanf("%d %d", &L, &R);
        int result = countPrettyNumbers(L, R);
        printf("%d\n", result);
    }

    return 0;
}
