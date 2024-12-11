Scoring: $100$ points

## Problem Statement

You are given a string $S$ consisting of `&amp;lt;`, `=`, and `&amp;gt;`.<br>
Determine whether $S$ is a **bidirectional arrow** string.<br>
A string $S$ is a bidirectional arrow string if and only if there is a positive integer $k$ such that $S$ is a concatenation of one `&amp;lt;`, $k$ `=`s, and one `&amp;gt;`, in this order, with a length of $(k+2)$.

## Constraints

- $S$ is a string of length between $3$ and $100$, inclusive, consisting of `&amp;lt;`, `=`, and `&amp;gt;`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a **bidirectional arrow** string, print `Yes`; otherwise, print `No`.

```input1
<====>
```

```output1
Yes
```

`&amp;lt;====&amp;gt;` is a concatenation of one `&amp;lt;`, four `=`s, and one `&amp;gt;`, in this order, so it is a bidirectional arrow string.<br>
Hence, print `Yes`.

```input2
==>
```

```output2
No
```

`==&amp;gt;` does not meet the condition for a bidirectional arrow string.<br>
Hence, print `No`.

```input3
<>>
```

```output3
No
```