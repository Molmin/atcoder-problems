Score: $1100$ points

## Problem Statement

A string $T$ is called a **good string** when it satisfies the following condition:

- There is a pair of strings $(A, B)$ that satisfies all of the following:-   - Both $A$ and $B$ are non-empty.
-   - $A + B = T$.
-   - Both $A + \mathrm{rev}(B)$ and $\mathrm{rev}(A) + B$ are palindromes.

Here, $A + B$ denotes the string formed by concatenating strings $A$ and $B$ in this order.<br>
Also, $\mathrm{rev}(A)$ denotes the string formed by reversing the order of the characters in string $A$.

There is a string $S$ of length $N$ consisting of lowercase English letters and the character `?`.<br>
Among the $26^{(\text{number of ?s})}$ ways to replace the `?`s in $S$ with lowercase English letters, how many result in a good string? Find the count modulo $998244353$.

## Constraints

- $2 \leq N \leq 5 \times 10^4$
- $S$ is a string of length $N$ consisting of lowercase English letters and `?`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$

## Output

Print the number, modulo $998244353$, of ways to replace the characters that satisfy the condition in the problem statement.

```input1
4
?ba?
```

```output1
1
```

The string `abab` is good, because if we set $A =$ `ab` and $B =$ `ab`, then $A + B =$ `abab`, and both $A + \mathrm{rev}(B) =$ `abba` and $\mathrm{rev}(A) + B =$ `baab` are palindromes.<br>
Among the strings that can be formed by replacing the `?`s in $S$ with lowercase English letters, there is only one good string, which is `abab`.

```input2
10
?y?x?x????
```

```output2
676
```

```input3
30
???a?????aab?a???c????c?aab???
```

```output3
193994800
```

```input4
36
????????????????????????????????????
```

```output4
363594614
```