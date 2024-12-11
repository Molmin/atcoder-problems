Score : $200$ points

## Problem Statement

You are given integers $L$, $R$, and a string $S$ consisting of lowercase English letters.<br>
Print this string after reversing (the order of) the $L$-th through $R$-th characters.

## Constraints

- $S$ consists of lowercase English letters.
- $1 \le |S| \le 10^5$ ($|S|$ is the length of $S$.)
- $L$ and $R$ are integers.
- $1 \le L \le R \le |S|$

## Input

Input is given from Standard Input in the following format:

> $L$ $R$
> 
> $S$

## Output

Print the specified string.

```input1
3 7
abcdefgh
```

```output1
abgfedch
```

After reversing the $3$-rd through $7$-th characters of `abcdefgh`, we have `abgfedch`.

```input2
1 7
reviver
```

```output2
reviver
```

The operation may result in the same string as the original.

```input3
4 13
merrychristmas
```

```output3
meramtsirhcyrs
```