Score : $1500$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

Shik's job is very boring. At day $0$, his boss gives him a string $S_0$ of length $N$ which consists of only lowercase English letters. In the $i$-th day after day $0$, Shik's job is to copy the string $S_{i-1}$ to a string $S_i$. We denote the $j$-th letter of $S_i$ as $S_i[j]$.

Shik is inexperienced in this job. In each day, when he is copying letters one by one from the first letter to the last letter, he would make mistakes. That is, he sometimes accidentally writes down the same letter that he wrote previously instead of the correct one. More specifically, $S_i[j]$ is equal to either $S_{i-1}[j]$ or $S_{i}[j-1]$. (Note that $S_i[1]$ always equals to $S_{i-1}[1]$.)

You are given the string $S_0$ and another string $T$.
Please determine the smallest integer $i$ such that $S_i$ could be equal to $T$. If no such $i$ exists, please print `-1`.

## Constraints

- $1 \leq N \leq 1,000,000$
- The lengths of $S_0$ and $T$ are both $N$.
- Both $S_0$ and $T$ consist of lowercase English letters.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S_0$
> 
> $T$

## Output

Print the smallest integer $i$ such that $S_i$ could be equal to $T$. If no such $i$ exists, print `-1` instead.

```input1
5
abcde
aaacc
```

```output1
2
```

$S_0$ = `abcde`, $S_1$ = `aaccc` and $S_2$ = `aaacc` is a possible sequence such that $S_2 = T$.

```input2
5
abcde
abcde
```

```output2
0
```

```input3
4
acaa
aaca
```

```output3
2
```

```input4
5
abcde
bbbbb
```

```output4
-1
```