Score : $200$ points

## Problem Statement

In the beginning, Takahashi has $A$ cookies, and Aoki has $B$ cookies.
They will perform the following operation alternately, starting from Takahashi:

- If the number of cookies in his hand is odd, eat one of those cookies; if the number is even, do nothing. Then, give one-half of the cookies in his hand to the other person.

Find the numbers of cookies Takahashi and Aoki respectively have after performing $K$ operations in total.

## Constraints

- $1 \leq A,B \leq 10^9$
- $1 \leq K \leq 100$
- $A,B$ and $K$ are integers.

## Input

Input is given from Standard Input in the following format:

> $A$ $B$ $K$

## Output

Print the number of cookies Takahashi has, and the number of cookies Aoki has, in this order, after performing $K$ operations in total.

```input1
5 4 2
```

```output1
5 3
```

The process will go as follows:

- In the beginning, Takahashi and Aoki have $5$ and $4$ cookies, respectively.
- Takahashi eats one cookie and gives two cookies to Aoki. They now have $2$ and $6$ cookies, respectively.
- Aoki gives three cookies to Takahashi. They now have $5$ and $3$ cookies, respectively.

```input2
3 3 3
```

```output2
1 3
```

```input3
314159265 358979323 84
```

```output3
448759046 224379523
```