Score : $300$ points

## Problem Statement

You are given a ciphertext $S$. It can be decrypted by the following procedure:

- Let $T$ be an empty string.
- For each $i = 1, 2, \dots, |S|$ in this order, do the following: ($|S|$ denotes the length of $S$)-   - if the $i$-th character of $S$ is `R`, reverse $T$;
-   - if the $i$-th character of $S$ is not `R`, add that character to the end of $T$.
- After the operation above, if there are two consecutive same characters in $T$, remove those two characters. Repeat this operation as long as it can be done. (We can prove that the final string obtained does not depend on the order the characters are removed.)

Print the string $T$ obtained by this procedure.

## Constraints

- $S$ consists of lowercase English letters and `R`.
- $1 \leq |S| \leq 5 \times 10^5$

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the answer.

```input1
ozRnonnoe
```

```output1
zone
```

We can decrypt it as follows:

- Initially, $T$ is an empty string.
- Add `o` at the end of $T$, making it `o`.
- Add `z` at the end of $T$, making it `oz`.
- Reverse $T$, making it `zo`.
- Add `n` at the end of $T$, making it `zon`.
- Add `o` at the end of $T$, making it `zono`.
- Add `n` at the end of $T$, making it `zonon`.
- Add `n` at the end of $T$, making it `zononn`.
- Add `o` at the end of $T$, making it `zononno`.
- Add `e` at the end of $T$, making it `zononnoe`.
- Delete two consecutive `n`s from $T$, making it `zonooe`.
- Delete two consecutive `o`s from $T$, making it `zone`.

```input2
hellospaceRhellospace
```

```output2

```

The answer may be an empty string.