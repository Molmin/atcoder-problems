Score : $100$ points

## Problem Statement

Takahashi wants to be a member of some web service.

He tried to register himself with the ID $S$, which turned out to be already used by another user.

Thus, he decides to register using a string obtained by appending one character at the end of $S$ as his ID.

He is now trying to register with the ID $T$. Determine whether this string satisfies the property above.

## Constraints

- $S$ and $T$ are strings consisting of lowercase English letters.
- $1 \leq |S| \leq 10$
- $|T| = |S| + 1$

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$

## Output

If $T$ satisfies the property in Problem Statement, print `Yes`; otherwise, print `No`.

```input1
chokudai
chokudaiz
```

```output1
Yes
```

`chokudaiz` can be obtained by appending `z` at the end of `chokudai`.

```input2
snuke
snekee
```

```output2
No
```

`snekee` cannot be obtained by appending one character at the end of `snuke`.

```input3
a
aa
```

```output3
Yes
```