Score : $400$ points

## Problem Statement

You are given a string $S$ consisting of six types of characters: `(`, `)`, `[`, `]`, `&amp;lt;`, `&amp;gt;`.

A string $T$ is called a colorful bracket sequence if it satisfies the following condition:

It is possible to turn $T$ into an empty string by repeating the following operation any number of times (possibly zero):

- If there exists a contiguous substring of $T$ that is one of `()`, `[]`, or `&amp;lt;&amp;gt;`, choose one such substring and delete it.
- If the deleted substring was at the beginning or end of $T$, the remainder becomes the new $T$.
- Otherwise, concatenate the part before the deleted substring and the part after the deleted substring, and that becomes the new $T$.

Determine whether $S$ is a colorful bracket sequence.

## Constraints

- $S$ is a string of length between $1$ and $2\times 10^5$, inclusive.
- $S$ consists of `(`, `)`, `[`, `]`, `&amp;lt;`, `&amp;gt;`.

## Input

The input is given from Standard Input in the following format:

> $S$

## Output

If $S$ is a colorful bracket sequence, print `Yes`; otherwise, print `No`.

```input1
([])<>()
```

```output1
Yes
```

For $S=$`([])&amp;lt;&amp;gt;()`, it is possible to turn it into an empty string by repeating the operation as follows:

- Delete the substring `[]` from the 2nd to the 3rd character in `([])&amp;lt;&amp;gt;()`, then concatenate the parts before and after it. The string becomes `()&amp;lt;&amp;gt;()`.
- Delete the substring `()` from the 1st to the 2nd character in `()&amp;lt;&amp;gt;()`. The string becomes `&amp;lt;&amp;gt;()`.
- Delete the substring `&amp;lt;&amp;gt;` from the 1st to the 2nd character in `&amp;lt;&amp;gt;()`. The string becomes `()`.
- Delete the substring `()` from the 1st to the 2nd character in `()`. The string becomes empty.

Thus, $S=$`([])&amp;lt;&amp;gt;()` is a colorful bracket sequence, so print `Yes`.

```input2
([<)]>
```

```output2
No
```

Since $S=$`([&amp;lt;)]&amp;gt;` does not contain `()`, `[]`, or `&amp;lt;&amp;gt;` as a contiguous substring, we cannot perform the 1st operation, and in particular $S$ is not a colorful bracket sequence. Therefore, print `No`.

```input3
())
```

```output3
No
```

It is impossible to turn $S$ into an empty string by repeating the operations.<br>
Therefore, $S$ is not a colorful bracket sequence, so print `No`.