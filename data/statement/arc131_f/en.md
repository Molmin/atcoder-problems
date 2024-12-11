Score : $1000$ points

## Problem Statement

On a string $S$ consisting of `A`, `R`, and `C`, we did the following operation at most $K$ times: choose three consecutive characters and overwrite them with `ARC`. The result is the string $T$.

How many strings are there that could be the initial string $S$? Find this count modulo $998244353$.

## Constraints

- $3 \leq |T| \leq 5000$
- $0 \leq K \leq 10000$
- $T$ is a string consisting of `A`, `R`, and `C`.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $K$

## Output

Print the answer.

```input1
ARCCARC
1
```

```output1
53
```

Below are some examples of the initial string $S$ from which we can get the string $T$ = `ARCCARC` with at most $1$ operation.

- $S$ = `ARCCARC`: we can choose to do nothing to get `ARCCARC`.
- $S$ = `CRACARC`: we can choose the $1$-st, $2$-nd, $3$-rd characters and overwrite them with `ARC` to get `ARCCARC`.
- $S$ = `ARCCCCC`: we can choose the $5$-th, $6$-th, $7$-th characters and overwrite them with `ARC` to get `ARCCARC`.

There are many other strings that could be $S$, for a total of $53$.

```input2
ARARCRCA
5
```

```output2
2187
```

If the intial string $S$ is `AAAAAAAA`, one way to get $T$ = `ARARCRCA` with at most $5$ operations is as follows.

- Step $1$: choose the $3$-rd, $4$-th, $5$-th characters and overwrite them with `ARC` to get the string `AAARCAAA`.
- Step $2$: choose the $5$-th, $6$-th, $7$-th characters and overwrite them with `ARC` to get the string `AAARARCA`.
- Step $3$: choose the $1$-st, $2$-nd, $3$-rd characters and overwrite them with `ARC` to get the string `ARCRARCA`.
- Step $4$: choose the $3$-rd, $4$-th, $5$-th characters and overwrite them with `ARC` to get the string `ARARCRCA`.

There are many other strings that could be $S$, for a total of $2187$.

```input3
AARCRRARCC
0
```

```output3
1
```

We can get $T$ = `AARCRRARCC` with $0$ operations in only one case in which $S = T$ from the beginning, or $S$ = `AARCRRARCC`.

```input4
AAAAARRRRRCCCCC
131
```

```output4
1
```

In this case, there is just one string that could be $S$: `AAAAARRRRRCCCCC`.

```input5
CAARCACRAAARARARCRCRARCARARCRRARC
9
```

```output5
797833187
```

There are $320236026147$ strings that could be $S$, so print this count modulo $998244353$, which is $797833187$.