Score : $400$ points

## Problem Statement

Snuke has come to Seisu-ya (*integer shop*) with an integer $B$ in his hand.
In Seiyu-ya, you can exchange your integer for another integer by paying money.

More specifically, you can use the following two services any number of times in any order:

- Pay $1$ yen (the currency of Japan) to multiply your integer by $-1$.
- Pay $2$ yen to subtract $1$ from your integer.

How many integers are there that Snuke can get for at most $C$ yen?

## Constraints

- $-10^{18}\le B \le 10^{18}$
- $1\le C \le 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $B$ $C$

## Output

Print the answer.

```input1
11 2
```

```output1
3
```

There are three numbers that Snuke can get: $-11$, $10$, and $11$, as follows:

- by doing nothing, he can get $11$ for $0$ yen;
- by multiplying $11$ by $-1$, he can get $-11$ for $1$ yen;
- by subtracting $1$ from $11$, he can get $10$ for $2$ yen.

```input2
0 4
```

```output2
4
```

There are four numbers that Snuke can get: $-2$, $-1$, $0$, and $1$, as follows:

- by doing nothing, he can get $0$ for $0$ yen;
- by subtracting $1$ from $0$, he can get $-1$ for $2$ yen;
- by subtracting $1$ from $0$ and then multiplying by $-1$, he can get $1$ for $3$ yen;
- by subtracting $1$ from $0$ and then subtracting $1$ again, he can get $-2$ for $4$ yen.

```input3
112 20210213
```

```output3
20210436
```

```input4
-211 1000000000000000000
```

```output4
1000000000000000422
```