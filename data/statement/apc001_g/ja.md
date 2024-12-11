配点 : $2000$ 点

## 問題文

左岸と右岸を繋ぐ橋があります。
橋の上の相異なる $2 N$ 箇所には、それぞれある色のドアが置かれています。
各ドアの色は $1$ から $N$ までの整数で表されます。
各 $k$ ($1 \leq k \leq N$) について、色 $k$ のドアはちょうど $2$ 個存在します。

すぬけ君は、左岸から右岸へ橋を渡ることにしました。
すぬけ君は常に右へ向かって歩き続けますが、その間に次の現象が起こります。

- すぬけ君が色 $k$ ($1 \leq k \leq N$) のドアに触れた瞬間、すぬけ君は色 $k$ の他方のドアのすぐ右へワープする。

すぬけ君はいずれ右岸に辿り着くことが示せます。

各 $i$ ($1 \leq i \leq 2 N - 1$) について、左から $i$ 番目および $i + 1$ 番目のドアに挟まれた区間を、区間 $i$ と呼ぶことにします。
橋を渡り終えたすぬけ君は、各 $i$ ($1 \leq i \leq 2 N - 1$) について、区間 $i$ を歩いたか否かを記録しました。
この記録が、長さ $2 N - 1$ の文字列 $s$ として与えられます。
各 $i$ ($1 \leq i \leq 2 N - 1$) について、すぬけ君が区間 $i$ を歩いたならば、$s$ の $i$ 文字目は `1` であり、そうでないならば、$s$ の $i$ 文字目は `0` です。

![](https://img.atcoder.jp/cookie/970b981380ffad7745008433034c0885.png)

図: 入力例 3 に対応するドアの配置の例

記録に矛盾しないようなドアの配置が存在するか判定し、存在するならばひとつ構成してください。

## 制約

- $1 \leq N \leq 10^5$
- $|s| = 2 N - 1$
- $s$ は `0` と `1` のみからなる。

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $s$

## 出力

記録に矛盾しないようなドアの配置が存在しないならば、`No` を出力せよ。
存在するならば、$1$ 行目に `Yes` を出力し、$2$ 行目にドアの配置をひとつ次のフォーマットで出力せよ。
ただし、各 $i$ ($1 \leq i \leq 2 N$) について、$c_i$ は左から $i$ 番目のドアの色である。

> $c_1$ $c_2$ $...$ $c_{2 N}$

```input1
2
010
```

```output1
Yes
1 1 2 2
```

```input2
2
001
```

```output2
No
```

```input3
3
10110
```

```output3
Yes
1 3 2 1 2 3
```

以下の図は問題文中のものと同様です。

![](https://img.atcoder.jp/cookie/970b981380ffad7745008433034c0885.png)

```input4
3
10101
```

```output4
No
```

```input5
6
00111011100
```

```output5
Yes
1 6 1 2 3 4 4 2 3 5 6 5
```