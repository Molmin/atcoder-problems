Score : $500$ points

## Problem Statement

Given is a string $S$. From this string, Takahashi will make a new string $T$ as follows.

- First, mark one or more characters in $S$. Here, no two marked characters should be adjacent.
- Next, delete all unmarked characters.
- Finally, let $T$ be the remaining string. Here, it is forbidden to change the order of the characters.

How many strings are there that can be obtained as $T$? Find the count modulo $(10^9 + 7)$.

## Constraints

- $S$ is a string of length between $1$ and $2 \times 10^5$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $S$

## Output

Print the number of different strings that can be obtained as $T$, modulo $(10^9 + 7)$.

```input1
abc
```

```output1
4
```

There are four strings that can be obtained as $T$: `a`, `b`, `c`, and `ac`.

Marking the first character of $S$ yields `a`;

marking the second character of $S$ yields `b`;

marking the third character of $S$ yields `c`;

marking the first and third characters of $S$ yields `ac`.

Note that it is forbidden to, for example, mark both the first and second characters.

```input2
aa
```

```output2
1
```

There is just one string that can be obtained as $T$, which is `a`.
Note that marking different positions may result in the same string.

```input3
acba
```

```output3
6
```

There are six strings that can be obtained as $T$: `a`, `b`, `c`, `aa`, `ab`, and `ca`.

```input4
chokudai
```

```output4
54
```